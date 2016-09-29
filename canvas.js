import MultiPolygon from './multi';

export class Canvas {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
  }

  Multi(options) {
    return new MultiPolygon(this.context, options);
  }
}
