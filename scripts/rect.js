import Shape from './shape';

export default class Rect extends Shape {
  constructor(context, options = {}) {
    options = Object.assign({}, options);
    options.height = options.height || 0;
    options.width = options.width || 0;
    options.x = options.x || 0;
    options.y = options.y || 0;

    super(context, options);
  }

  render() {
    super.render();

    const context = this.context;
    const options = this.options;

    context.fillRect(options.x, options.y, options.width, options.height);
    context.strokeRect(options.x, options.y, options.width, options.height);
  }
}
