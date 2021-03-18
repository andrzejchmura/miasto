import { Point } from 'types';

type CityCoordinates = {
  CENTER: Point;
  MAX_BOUNDS: [Point, Point];
};

export const GDYNIA: CityCoordinates = {
  CENTER: [18.5366, 54.5167],
  MAX_BOUNDS: [
    [18.2366, 54.3936],
    [18.7571, 54.6206],
  ],
};

export const INITIAL_RADIUS = 400;
