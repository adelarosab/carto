import Polygon from './polygon';

const Shapes = {
  Polygon
};

export default class Canvas {
  constructor(canvas) {
    const rect = canvas.getBoundingClientRect();

    this.context = canvas.getContext('2d');
    this.drawings = [];
    this.el = canvas;
    this.offset = {x: 0, y: 0};
    this.scale = 1;

    canvas.height = rect.height;
    canvas.width = rect.width;
  }

  factory(shape, options) {
    const instance = new Shapes[shape](this.context, options);

    this.drawings.push(instance);
    instance.render();

    return instance;
  }

  Polygon(options) {
    return this.factory('Polygon', options);
  }

  clear() {
    this.context.clearRect(
      -this.offset.x / this.scale,
      -this.offset.y / this.scale,
      this.el.width / this.scale,
      this.el.height / this.scale
    );
  }

  render() {
    this.clear();
    for (let shape of this.drawings) {
      shape.render();
    }
  }

  translate(x, y) {
    this.offset = {
      x: this.offset.x + x * this.scale,
      y: this.offset.y + y * this.scale
    };
    this.context.translate(x, y);
    this.render();
  }

  zoom(scale) {
    this.scale = scale;
    this.context.scale(scale, scale);
    this.render();
  }
}
