const { StoreLatestFlowReadings } = require("../water-flow-rates");
const { StoreMissingTideTimes } = require("../data-feeds/tide-times");
const { StoreMissingWaterLevels } = require("../opw-water-levels");
const { DeleteOldWaterLeveLReadings } = require("../opw-water-levels");
const { StoreLatestForecastData } = require("../data-feeds/weather-forecast");

module.exports = {
  Karunch(req, res) {
    // store latest tide times
    StoreMissingTideTimes("cork")
      .then(StoreMissingTideTimes("youghal"))
      .then(StoreMissingTideTimes("kinsale"))
      .then(StoreLatestFlowReadings)
      .then(StoreMissingWaterLevels("lee", "waterworks"))
      .then(StoreLatestForecastData("lee", "anglers-rest"))
      .then(StoreMissingWaterLevels("bandon", "curranure"))
      .then(StoreLatestForecastData("bandon", "bandon"))
      .then(StoreMissingWaterLevels("blackwater", "fermoy"))
      .then(StoreMissingWaterLevels("blackwater", "ballyduff"))
      .then(StoreLatestForecastData("blackwater", "fermoy"))
      .then(StoreMissingWaterLevels("owenboy", "ballea"))
      .then(StoreLatestForecastData("owenboy", "carrigaline"))
      .then(StoreMissingWaterLevels("lee", "ovens"))
      .then(DeleteOldWaterLeveLReadings())

      .then(res.send("data crunchified"));
  },
};
