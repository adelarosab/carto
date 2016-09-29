import Canvas from './canvas';

const el = document.querySelector('canvas');
const canvas = new Canvas(el);
const url = 'https://rambo-test.carto.com/api/v2/sql?q=select%20ST_AsGeoJSON(the_geom)%20as%20geometry,%20firecomp%20from%20public.mnmappluto%20limit%2050';

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
      for (let item of response) {
        const geometry = JSON.parse(item.geometry);
        let coordinates = geometry.coordinates[0][0];

        coordinates = coordinates.map(
          (value) => [
            (value[0] - coordinates[0][0] + .0005) * 1000000,
            (value[1] - coordinates[0][1] + .0005) * 1000000
          ]
        );

        canvas.Multi(
          {
            fill: `#${colors[Math.round(Math.random() * 10) % 6]}`,
            points: coordinates
          }
        );
      }
    }
  );
