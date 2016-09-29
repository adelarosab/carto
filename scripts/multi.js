import Polygon from './polygon';

export default class MultiPolygon extends Polygon {
  constructor(context, options = {}) {
    super(context);

    options = Object.assign(options);

    options.fill = options.fill || '#000000';
    options.points = options.points || [];
    options.stroke = options.stroke || 'transparent';

    this.options = options;
  }

  render() {
    const context = this.context;
    const options = this.options;
    const points = options.points;
    const head = points[0] || [];

    context.fillStyle = options.fill;
    context.strokeStyle = options.stroke;

    console.log(context.fillStyle);

    context.beginPath();
    context.moveTo(head[0], head[1]);
    for (let point of points) {
      context.lineTo(point[0], point[1]);
    }
    context.closePath();
    context.fill();
    context.stroke();
  }
}
