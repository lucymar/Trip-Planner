// console.log('js file working')

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2hhc3VsaW4iLCJhIjoiY2p0NGowbnhpMDN3ajQ0bnlqaDFneTFudyJ9.XUIdLzAvJ2OQGVyogp8v4A';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const detatchedElement = document.createElement('div');
detatchedElement.style.width = '32px';
detatchedElement.style.height = '40px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(detatchedElement).setLngLat([-74.009, 40.705]).addTo(map);
