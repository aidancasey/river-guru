const { StoreLatestFlowReadings } = require("../water-flow-rates");
const { DeleteOldWaterLevels } = require("../water-flow-rates");
const { StoreMissingTideTimes } = require("../data-feeds/tide-times");
const { StoreMissingWaterLevels } = require("../opw-water-levels");
const { DeleteOldWaterLeveLReadings } = require("../opw-water-levels");
const { StoreLatestForecastData } = require("../data-feeds/weather-forecast");
const { StoreRiverSunTimes } = require("../data-feeds/sun-moon");

module.exports = {
  async Karunch(req, res) {
    try {
      // store latest tide times
      await StoreMissingTideTimes("cork");
      await StoreMissingTideTimes("youghal");
      await StoreMissingTideTimes("kinsale");
      
      // Store water levels and forecasts
      await StoreMissingWaterLevels("lee", "waterworks");
      await StoreLatestForecastData("lee", "anglers-rest");
      await StoreMissingWaterLevels("bandon", "curranure");
      await StoreLatestForecastData("bandon", "bandon");
      await StoreMissingWaterLevels("blackwater", "fermoy");
      await StoreMissingWaterLevels("blackwater", "ballyduff");
      await StoreLatestForecastData("blackwater", "fermoy");
      await StoreMissingWaterLevels("owenboy", "ballea");
      await StoreLatestForecastData("owenboy", "carrigaline");
      await StoreMissingWaterLevels("lee", "ovens");
      
      // Store sun times
      await StoreRiverSunTimes("bandon", "bandon");
      await StoreRiverSunTimes("lee", "anglers-rest");
      await StoreRiverSunTimes("blackwater", "fermoy");
      await StoreRiverSunTimes("owenboy", "carrigaline");
      await StoreRiverSunTimes("suir", "cahir");
      
      // Store remaining water levels and forecasts
      await StoreMissingWaterLevels("bandon", "bealaboy");
      await StoreMissingWaterLevels("suir", "new-bridge");
      await StoreMissingWaterLevels("suir", "carrick-on-suir");
      await StoreLatestForecastData("suir", "cahir");
      
      // Clean up old data
      await DeleteOldWaterLeveLReadings();
      await DeleteOldWaterLevels(60);
      
      // Store latest flow readings
      await StoreLatestFlowReadings();
      
      res.status(200).send("data crunchified");
    } catch (error) {
      console.error("Error in Karunch:", error);
      res.status(500).send({ error: error.message });
    }
  },
};
