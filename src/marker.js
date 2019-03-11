const mapboxgl = require('mapbox-gl');
const map = require('./index')

const markerMaker = (type, coords) => {
    const markerEl = document.createElement('div');
    markerEl.style.width = '32px';
    markerEl.style.height = '40px';

    if (type === 'activity'){
        markerEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    else if (type === 'restaurant') {
        markerEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    else if (type === 'hotel') {
        markerEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }

    const newMarker = new mapboxgl.Marker(markerEl).setLngLat(coords).addTo(map);

}

module.exports = markerMaker;