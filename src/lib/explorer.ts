import MapboxGL from 'mapbox-gl';
import { Point } from 'types';
import Features from './features';
import Circle from './circle';
import { GDYNIA, INITIAL_RADIUS } from './constants';

MapboxGL.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || '';

export default class Explorer {
  map: MapboxGL.Map;
  features: Features;
  circle: Circle;

  constructor(container: HTMLElement) {
    this.map = new MapboxGL.Map({
      container: container,
      style: 'mapbox://styles/chmura/ckegxoaor0idw19oc87nlfpkp?optimize=true',
      center: GDYNIA.CENTER,
      zoom: 10,
      maxZoom: 16,
      minZoom: 10,
      pitchWithRotate: false,
      dragRotate: false,
      boxZoom: false,
      renderWorldCopies: false,
      antialias: true,
      maxBounds: GDYNIA.MAX_BOUNDS,
    });
    this.features = new Features(this.map);
    this.circle = new Circle(this.map);
  }

  init() {
    this.map.on('load', () => {
      this.features.init();
      this.features.setup();
      this.circle.init(GDYNIA.CENTER, INITIAL_RADIUS);
    });

    this.map.once('idle', () => {
      this.map.flyTo({
        center: GDYNIA.CENTER,
        zoom: 14,
        duration: 2000,
      });
    });
  }

  show(id: string) {
    const layersList = [
      'buildings/figure',
      'buildings/code',
      'buildings/level',
    ];

    layersList.forEach((layerId) => {
      this.map.setLayoutProperty(layerId, 'visibility', 'none');
    });

    this.map.setLayoutProperty(id, 'visibility', 'visible');
  }

  update(position: Point, radius: number) {
    this.circle.update(position, radius);
    return this.features.update(position, radius);
  }
}
