import MultiPolygon from './multi';

export default class Canvas {
  constructor(canvas) {
    const rect = canvas.getBoundingClientRect();

    this.context = canvas.getContext('2d');

    canvas.height = rect.height;
    canvas.width = rect.width;
  }

  Multi(options) {
    const instance = new MultiPolygon(this.context, options);

    instance.render();

    return instance;
  }
}
