const { WeatherForecast } = require("../../models");
const { RiverLocation } = require("../../models");
const { DateTime } = require("luxon");

async function GetForecast(river, locationID) {
  return WeatherForecast.findOne({
    where: {
      river: river,
      locationID: locationID,
    },
  });
}

async function UpsertForecast(river, locationID, forecast) {
  await WeatherForecast.findOne({
    where: {
      river: river,
      locationID: locationID,
    },
  }).then((foundItem) => {
    if (!foundItem) {
      console.log("forecast :");
      console.log(JSON.stringify(forecast));
      forecast.save();
    } else {
      foundItem.data = forecast.data;
      foundItem.recordedAt = DateTime.local();
      foundItem.save();
    }
  });
}

module.exports.GetForecast = GetForecast;
module.exports.UpsertForecast = UpsertForecast;
