const riverLocations = require('./riverLocations');
const flowReadings = require('./flowReadings');
const dataCruncher = require('./crunch');
const tides = require('./tides');
const riverLevel = require('./riverLevel');

module.exports = {
  riverLocations,
  dataCruncher,
  flowReadings,
  tides,
  riverLevel
};
