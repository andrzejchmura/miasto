const fs = require('fs');
const featureEach = require('@turf/meta').featureEach;
const featureCollection = require('@turf/helpers').featureCollection;

const features = JSON.parse(
  fs.readFileSync('./data/gdynia/buildings.geojson').toString()
);

const resultFeatures = [];
featureEach(features, function (feature, index) {
  feature.id = index;
  resultFeatures.push(feature);
});

const result = featureCollection(resultFeatures);
const data = JSON.stringify(result);

fs.writeFileSync('./public/gdynia/output.geojson', data);
