import Map from './map';

const el = document.querySelector('canvas');
const map = new Map(
  el,
  {
    background: '#EEEEEE',
    offset: {x: -74.0001176973765, y: 40.7229325877763}
  }
);
const url = 'https://adelarosab.carto.com/api/v2/sql?' +
  'api_key=f0b5fe2dc8782a41c30702815ab7c5fb6d17fa2d&' +
  'q=select  ST_AsGeoJSON(the_geom) as geometry, firecomp from' +
  ' public.mnmappluto';

const colors = [
  'F44336',
  'E91E63',
  '9C27B0',
  '673AB7',
  '3F51B5',
  '2196F3',
  '03A9F4',
  '00BCD4',
  '009688',
  '4CAF50',
  '8BC34A',
  'CDDC39',
  'FFEB3B',
  'FFC107',
  'FF9800',
  'FF5722',
  '795548',
  '9E9E9E',
  '607D8B',
  'FF8A80',
  'FF5252',
  'FF1744',
  'D50000',
  'FF80AB',
  'FF4081',
  'F50057',
  'C51162',
  'EA80FC',
  'E040FB',
  'D500F9',
  'AA00FF',
  'B388FF',
  '7C4DFF',
  '651FFF',
  '6200EA',
  '8C9EFF',
  '536DFE',
  '3D5AFE',
  '304FFE',
  '82B1FF',
  '448AFF',
  '2979FF',
  '2962FF',
  '80D8FF',
  '40C4FF',
  '00B0FF',
  '0091EA',
  '84FFFF',
  '18FFFF',
  '00E5FF',
  '00B8D4',
  'A7FFEB',
  '64FFDA',
  '1DE9B6',
  '00BFA5',
  'B9F6CA',
  '69F0AE',
  '00E676',
  '00C853',
  'CCFF90',
  'B2FF59',
  '76FF03',
  '64DD17',
  'F4FF81',
  'EEFF41',
  'C6FF00',
  'AEEA00',
  'FFFF8D',
  'FFFF00',
  'FFEA00',
  'FFD600',
  'FFE57F',
  'FFD740',
  'FFC400',
  'FFAB00',
  'FFD180',
  'FFAB40',
  'FF9100',
  'FF6D00',
  'FF9E80',
  'FF6E40',
  'FF3D00',
  'DD2C00'
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
      let legend = {};

      for (let item of response) {
        let color = legend[item.firecomp];
        const geometry = JSON.parse(item.geometry);
        const isNull = !item.firecomp;

        if (!color && !isNull) {
          const index = Math.round(Math.random() * 100) % colors.length;

          color = legend[item.firecomp] = colors[index];
          colors.splice(index, 1);
        }

        map.MultiPolygon(
          geometry.coordinates, {
            fill: isNull ? '#212121' : `#${color}`
          }
        );
      }

      const legendEl = document.querySelector('details ul');
      let legendHTML = '';

      for (let key in legend) {
        legendHTML +=
          `<li><img style="background-color: #${legend[key]};">${key}</li>`;
      }

      legendEl.innerHTML = legendHTML;

      // Init controls
      const downEl = document.querySelector(
        '[data-js="controls"] > button:nth-of-type(3)'
      );
      const leftEl = document.querySelector(
        '[data-js="controls"] > button:nth-of-type(4)'
      );
      const rightEl = document.querySelector(
        '[data-js="controls"] > button:nth-of-type(2)'
      );
      const upEl = document.querySelector(
        '[data-js="controls"] > button:nth-of-type(1)'
      );
      const zoomInEl = document.querySelector(
        '[data-js="zoom"] button:nth-of-type(1)'
      );
      const zoomOutEl = document.querySelector(
        '[data-js="zoom"] button:nth-of-type(2)'
      );

      downEl.addEventListener('click', map.translate.bind(map, 0, -50));
      leftEl.addEventListener('click', map.translate.bind(map, 50, 0));
      rightEl.addEventListener('click', map.translate.bind(map, -50, 0));
      upEl.addEventListener('click', map.translate.bind(map, 0, 50));
      zoomInEl.addEventListener('click', map.zoom.bind(map, 1.25));
      zoomOutEl.addEventListener('click', map.zoom.bind(map, .8));

      window.map = map;
    }
  );
