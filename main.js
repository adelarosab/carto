import Canvas from 'canvas';

const el = document.querySelector('canvas');
const canvas = new Canvas(el);
const url = 'https://rambo-test.carto.com/api/v2/sql?q=select%20ST_AsGeoJSON(the_geom)%20as%20geometry,%20firecomp%20from%20public.mnmappluto%20limit%201';

fetch(url)
  .then(
    (response) => {
      return response.rows;
    }
  )
  .then(
    (response) => {
      for (let polygon of response) {
        console.log(polygon.geometry);
      }
    }
  );
