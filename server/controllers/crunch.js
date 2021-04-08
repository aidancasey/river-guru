const { StoreLatestFlowReadings } = require("../water-flow-rates");
const { StoreMissingTideTimes } = require("../data-feeds/tide-times");
const { StoreMissingWaterLevels } = require("../opw-water-levels");
const { DeleteOldWaterLeveLReadings } = require("../opw-water-levels");
const { StoreLatestForecastData } = require("../data-feeds/weather-forecast");
const { StoreRiverSunTimes } = require("../data-feeds/sun-moon");
module.exports = {
  async Karunch(req, res) {
    // store latest tide times
    StoreMissingTideTimes("cork")
      .then(StoreMissingTideTimes("youghal"))
      .then(StoreMissingTideTimes("kinsale"))
      .then(StoreLatestFlowReadings)
      .then(await StoreMissingWaterLevels("lee", "waterworks"))
      .then(StoreLatestForecastData("lee", "anglers-rest"))
      .then(await StoreMissingWaterLevels("bandon", "curranure"))
      .then(StoreLatestForecastData("bandon", "bandon"))
      .then(await StoreMissingWaterLevels("blackwater", "fermoy"))
      .then(await StoreMissingWaterLevels("blackwater", "ballyduff"))
      .then(StoreLatestForecastData("blackwater", "fermoy"))
      .then(StoreMissingWaterLevels("owenboy", "ballea"))
      .then(StoreLatestForecastData("owenboy", "carrigaline"))
      .then(await StoreMissingWaterLevels("lee", "ovens"))
      .then(StoreRiverSunTimes("bandon", "bandon"))
      .then(StoreRiverSunTimes("lee", "anglers-rest"))
      .then(StoreRiverSunTimes("blackwater", "fermoy"))
      .then(StoreRiverSunTimes("owenboy", "carrigaline"))
      .then(await StoreMissingWaterLevels("bandon", "bealaboy"))
      .then(DeleteOldWaterLeveLReadings())

      .then(res.send("data crunchified"));
  },
};
