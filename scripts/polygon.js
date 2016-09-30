import Shape from './shape';

export default class Polygon extends Shape {
  constructor(context, options = {}) {
    options = Object.assign({}, options);
    options.points =
      Array.isArray(options.points) ? options.points.slice(0) : [];

    super(context, options);
  }

  render() {
    super.render();

    const context = this.context;
    const points = this.options.points.slice(0);
    const head = points.shift();

    // console.log('====');
    context.beginPath();
    // console.log(head);
    context.moveTo(head.x, head.y);
    for (let point of points) {
      // console.log(point);
      context.lineTo(point.x, point.y);
    }
    context.closePath();
    context.fill();
    context.stroke();
  }
}
