import { Map, GeoJSONSource } from 'mapbox-gl';
import circle from '@turf/circle';
import { Point } from 'types';

export default class Circle {
  map: Map;

  constructor(map: Map) {
    this.map = map;
  }

  create(position: Point, radius: number) {
    return circle(position, radius, { units: 'meters' });
  }

  init(position: Point, radius: number) {
    const canvas = this.map.getCanvasContainer();
    const initialCircle = this.create(position, radius);

    this.map.addSource('circle', {
      type: 'geojson',
      data: initialCircle,
    });

    this.map.addLayer({
      id: 'circle',
      type: 'fill',
      source: 'circle',
      paint: {
        'fill-color': '#ffffff',
        'fill-opacity': ['interpolate', ['linear'], ['zoom'], 12, 0.2, 12.5, 0],
      },
    });
    this.map.addLayer({
      id: 'circle-border',
      type: 'line',
      source: 'circle',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-width': 2,
        'line-color': 'blue',
        'line-dasharray': [0, 4],
      },
    });

    this.map.on('mouseenter', 'circle', function () {
      canvas.style.cursor = 'move';
    });

    this.map.on('mouseleave', 'circle', function () {
      canvas.style.cursor = '';
    });
  }

  update(position: Point, radius: number) {
    const nextCircle = this.create(position, radius);

    const source = this.map.getSource('circle') as GeoJSONSource;
    source.setData(nextCircle);
  }
}
