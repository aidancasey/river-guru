const { StoreLatestFlowReadings } = require("../water-flow-rates");
const { StoreMissingTideTimes } = require("../data-feeds/tide-times");
const { StoreMissingWaterLevels } = require("../opw-water-levels");
const { DeleteOldWaterLeveLReadings } = require("../opw-water-levels");
const { StoreLatestForecastData } = require("../data-feeds/weather-forecast");

module.exports = {
  Karunch(req, res) {
    // store latest tide times
    StoreMissingTideTimes("cork")
      .then(StoreLatestFlowReadings)
      .then(StoreMissingWaterLevels("bandon", "curranure"))
      .then(StoreMissingWaterLevels("blackwater", "fermoy"))
      .then(StoreMissingWaterLevels("blackwater", "ballyduff"))
      .then(StoreMissingWaterLevels("owenboy", "ballea"))
      .then(StoreLatestForecastData("lee", "anglers-rest"))
      .then(StoreLatestForecastData("lee", "waterworks"))
      .then(StoreLatestForecastData("bandon", "bandon"))
      .then(StoreLatestForecastData("owenboy", "carrigaline"))
      .then(StoreLatestForecastData("blackwater", "fermoy"))
      .then(DeleteOldWaterLeveLReadings())

      .then(res.send("data crunchified"));
  },
};
