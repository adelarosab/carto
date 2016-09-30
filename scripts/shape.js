export default class Shape {
  constructor(context, options = {}) {
    options = Object.assign({}, options);
    options.fill = options.fill || '#000000';
    options.stroke = options.stroke || 'transparent';

    this.context = context;
    this.options = options;
  }

  render() {
    const context = this.context;
    const options = this.options;

    context.fillStyle = options.fill;
    context.strokeStyle = options.stroke;
  }
}
