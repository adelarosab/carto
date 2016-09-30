import Shape from './shape';

export default class Polygon extends Shape {
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
    const points = options.points.slice(0);
    const head = points.shift();

    context.fillStyle = options.fill;
    context.strokeStyle = options.stroke;

    // console.log('====');
    context.beginPath();
    // console.log(head);
    context.moveTo(head[0], head[1]);
    for (let point of points) {
      // console.log(point);
      context.lineTo(point[0], point[1]);
    }
    context.closePath();
    context.fill();
    context.stroke();
  }
}
