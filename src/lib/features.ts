import KDBush from 'kdbush';
import { Map, MapboxGeoJSONFeature } from 'mapbox-gl';
import centerOfMass from '@turf/center-of-mass';
import area from '@turf/area';
import {
  pipe,
  visibilityFormula,
  unsafe_multiply,
  unsafe_project,
  metersToDegrees,
} from './helpers';
import {
  getCodeColor,
  getCodeGroupId,
  getLevelColor,
  getLevelGroupId,
} from './data';
import { Point, Stats, StatsFragment } from 'types';

export default class Features {
  map: Map;
  features: MapboxGeoJSONFeature[];
  featuresIndex: KDBush<Point[]> | undefined;
  lastVisible: MapboxGeoJSONFeature[];

  constructor(map: Map) {
    this.map = map;
    this.features = [];
    this.lastVisible = [];
  }

  init() {
    this.map.addSource('boundary', {
      type: 'geojson',
      data: '/gdynia/boundary.geojson',
    });
    this.map.addSource('buildings', {
      type: 'geojson',
      data: '/gdynia/buildings.geojson',
      buffer: 0,
    });
    this.map.addLayer({
      id: 'boundary/fill',
      type: 'fill',
      source: 'boundary',
      paint: {
        'fill-color': '#ffffff',
        'fill-opacity': 0.1,
      },
    });
    this.map.addLayer({
      id: 'boundary/line',
      type: 'line',
      source: 'boundary',
      paint: {
        'line-width': 2,
        'line-color': '#4B5563',
        'line-opacity': 0.6,
      },
    });
    this.map.addLayer({
      id: 'buildings/outline',
      type: 'line',
      source: 'buildings',
      minzoom: 12,
      paint: {
        'line-width': 1,
        'line-color': '#D1D5DB',
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 13, 0, 14, 0.8],
      },
    });
    this.map.addLayer({
      id: 'buildings/figure',
      type: 'fill',
      source: 'buildings',
      paint: {
        'fill-color': '#000000',
        'fill-opacity': visibilityFormula,
      },
    });
    this.map.addLayer({
      id: 'buildings/code',
      type: 'fill',
      source: 'buildings',
      layout: {
        visibility: 'none',
      },
      paint: {
        'fill-color': ['feature-state', 'code-color'],
        'fill-opacity': visibilityFormula,
      },
    });
    this.map.addLayer({
      id: 'buildings/level',
      type: 'fill',
      source: 'buildings',
      layout: {
        visibility: 'none',
      },
      paint: {
        'fill-color': ['feature-state', 'levels-color'],
        'fill-opacity': visibilityFormula,
      },
    });
  }

  queryAllFeatures() {
    return fetch('/gdynia/buildings.geojson')
      .then((response) => response.json())
      .then((data) => data.features);
  }

  getFeaturesCenterIndex() {
    let points: Point[] = [];

    for (let i = 0; i < this.features.length; i++) {
      const p = centerOfMass(this.features[i]);
      points.push(unsafe_project(p.geometry.coordinates as Point));
    }

    return new KDBush<Point[]>(points);
  }

  setFeatureVisibility(feature: MapboxGeoJSONFeature, visibility: boolean) {
    this.map.setFeatureState(
      {
        source: 'buildings',
        id: feature.id,
      },
      {
        visible: visibility,
      }
    );
  }

  getSelectedFeatures(position: Point, radius: number) {
    if (!this.featuresIndex) {
      return [];
    }

    const projectedPosition = unsafe_project(position);
    const projectedRadiusInDeg = pipe(metersToDegrees, unsafe_multiply)(radius);

    const selectedIndexes = this.featuresIndex.within(
      ...projectedPosition,
      projectedRadiusInDeg
    );

    let selectedFeatures = [];

    for (let i = 0; i < selectedIndexes.length; i++) {
      const index = selectedIndexes[i];
      const feature = this.features[index];

      selectedFeatures.push(feature);
    }

    return selectedFeatures;
  }

  getSelectedFeaturesStats(
    features: MapboxGeoJSONFeature[],
    radius: number
  ): Stats {
    const memo = {
      figure: 0,
      codes: {} as StatsFragment,
      levels: {} as StatsFragment,
    };

    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      const codeGroupId = getCodeGroupId(feature.properties?.code);
      const levelGroupId = getLevelGroupId(feature.properties?.levels);
      const featureArea = area(feature);

      memo.figure += featureArea;

      if (memo.codes[codeGroupId]) {
        memo.codes[codeGroupId] += featureArea;
      } else {
        memo.codes[codeGroupId] = featureArea;
      }

      if (memo.levels[levelGroupId]) {
        memo.levels[levelGroupId] += featureArea;
      } else {
        memo.levels[levelGroupId] = featureArea;
      }
    }

    return {
      figure: {
        count: features.length,
        SOLID: memo.figure,
        VOID: Math.PI * radius * radius - memo.figure,
      },
      codes: memo.codes,
      levels: memo.levels,
    };
  }

  highlightSelectedFeatures(features: MapboxGeoJSONFeature[]) {
    for (let i = 0; i < this.lastVisible.length; i++) {
      this.setFeatureVisibility(this.lastVisible[i], false);
    }

    for (let i = 0; i < features.length; i++) {
      this.setFeatureVisibility(features[i], true);
    }

    this.lastVisible = features;
  }

  initFeatureColors() {
    for (let i = 0; i < this.features.length; i++) {
      const feature = this.features[i];
      const codeColor = getCodeColor(feature?.properties?.code);
      const levelsColor = getLevelColor(feature?.properties?.levels);

      this.map.setFeatureState(
        {
          source: 'buildings',
          id: feature.id,
        },
        {
          'code-color': codeColor,
          'levels-color': levelsColor,
        }
      );
    }
  }

  async setup() {
    this.features = await this.queryAllFeatures();
    this.featuresIndex = this.getFeaturesCenterIndex();

    this.initFeatureColors();
  }

  update(position: Point, radius: number) {
    const features = this.getSelectedFeatures(position, radius);
    const stats = this.getSelectedFeaturesStats(features, radius);

    this.highlightSelectedFeatures(features);

    return stats;
  }
}
