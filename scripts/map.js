import Canvas from './canvas';

export default class Map {
  constructor(canvas, options = {}) {
    options = Object.assign({}, options);

    options.background = options.background || 'transparent';
    options.offset =
      options.offset ? Object.assign({}, options.offset) : {x: 0, y: 0};
    options.zoom = options.zoom || 1;

    this.canvas = new Canvas(canvas);
    this.options = options;

    canvas.style.backgroundColor = options.background;
  }

  set offset(point) {
    point = point || {};
    point.x = point.x || 0;
    point.y = point.y || 0;

    this.options.offset = {x: point.x, y: point.y};
  }

  point(latitude, longitude) {
    const offset = this.options.offset;

    return {
      x: (latitude - offset.x) * 5000,
      y: (longitude - offset.y) * 5000
    };
  }

  translate() {
    this.canvas.translate(...arguments);
  }

  zoom() {
    this.canvas.zoom(...arguments);
  }

  MultiPolygon(polygons, options = {}) {
    for (let polygon of polygons) {
      this.Polygon(polygon, options);
    }
  }

  Polygon(coordinates, options = {}) {
    coordinates = coordinates[0];

    options = Object.assign({}, options);
    options.points = coordinates.map(
      (point) => this.point(point[0], point[1])
    );

    this.canvas.Polygon(options);
  }
}
