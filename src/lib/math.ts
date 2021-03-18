import { Point } from 'types';

export class Vec2 {
  private x: number;
  private y: number;

  constructor(point: Point) {
    this.x = point[0];
    this.y = point[1];
  }

  add(vec: Vec2) {
    this.x += vec.x;
    this.y += vec.y;

    return this;
  }

  subtract(vec: Vec2) {
    this.x -= vec.x;
    this.y -= vec.y;

    return this;
  }

  toPoint(): Point {
    return [this.x, this.y];
  }
}
