import { Expression } from 'mapbox-gl';
import {
  CodeGroup,
  FigureGroup,
  LevelGroup,
  Point,
  StatsFragment,
} from 'types';
import { lengthToDegrees } from '@turf/helpers';

export function unsafe_multiply(value: number) {
  /* 
    Mapbox uses the Web Mercator projection (EPSG:3857),
    but spatial index assumes a cartesian coordinate system
    in the range of [-180:180] in both axis.
    
    This hardcoded value works for northern Poland,
    I need to find a way to do the actual projection.
  */
  const UNSAFE_PROJECTION_FACTOR = 1.75;

  return value * UNSAFE_PROJECTION_FACTOR;
}

export function unsafe_project(value: Point): Point {
  return [value[0], unsafe_multiply(value[1])];
}

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

export function getPercentage(partial: number, total: number) {
  return (partial * 100) / total;
}

export function getValueAsString(value: number | undefined) {
  if (!value) {
    return '—';
  }

  if (Number.isInteger(value)) {
    return value.toString();
  }

  return value.toFixed(2);
}

export function pipe(...fns: any[]) {
  return (x: any) => fns.reduce((v, f) => f(v), x);
}

export function metersToDegrees(length: number) {
  return lengthToDegrees(length, 'meters');
}

export const visibilityFormula: Expression = [
  'interpolate',
  ['linear'],
  ['zoom'],
  12.5,
  0,
  13,
  ['case', ['boolean', ['feature-state', 'visible'], false], 1, 0],
];

export function mergeWith<T extends CodeGroup | LevelGroup | FigureGroup>(
  groups: T[],
  stats: StatsFragment
) {
  if (!stats) {
    return groups;
  }

  return groups.map((group) => {
    if (!stats[group.id]) {
      return {
        ...group,
        value: 0,
      };
    }

    return {
      ...group,
      value: stats[group.id],
    };
  });
}
