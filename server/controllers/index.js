const riverLocations = require("./riverLocations");
const flowReadings = require("./flowReadings");
const dataCruncher = require("./crunch");
const dataNuker = require("./nuke");
const tides = require("./tides");
const riverLevel = require("./riverLevel");
const weatherForecast = require("./weatherForecast");
const sunMoon = require("./sunMoon");
module.exports = {
  riverLocations,
  dataCruncher,
  flowReadings,
  tides,
  riverLevel,
  dataNuker,
  weatherForecast,
  sunMoon,
};
