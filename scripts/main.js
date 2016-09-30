import Canvas from './canvas';

const el = document.querySelector('canvas');
const canvas = new Canvas(el);
const url = 'https://rambo-test.carto.com/api/v2/sql?q=select' +
  ' ST_AsGeoJSON(the_geom) as geometry, firecomp from public.mnmappluto';
  // + ' limit 50';

const colors = [
  'F44336',
  'E91E63',
  '9C27B0',
  '673AB7',
  '3F51B5',
  '2196F3'
];

fetch(url)
  .then(
    (response) => {
      return response.json();
    }
  )
  .then(
    (response) => {
      return response.rows;
    }
  )
  .then(
    (response) => {
      let offset;

      for (let item of response) {
        const geometry = JSON.parse(item.geometry);
        let coordinates = geometry.coordinates[0][0];

        if (!offset) {
          offset = geometry.coordinates[0][0][0];
        }

        // console.log(JSON.stringify(geometry, false, 2));

        coordinates = coordinates.map(
          (value) => [
            (value[0] - offset[0]) * 5000 + 200,
            (value[1] - offset[1]) * 5000 + 100
          ]
        );

        canvas.Polygon(
          {
            fill: `#${colors[Math.round(Math.random() * 10) % 6]}`,
            points: coordinates.slice(0, -1)
          }
        );
      }
      window.canvas = canvas;
    }
  );
