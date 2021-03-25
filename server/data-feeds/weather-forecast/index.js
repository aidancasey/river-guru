const weatherAPI = require("weather-ireland-js");
const { WeatherForecast } = require("../../models");
const { RiverLocation } = require("../../models");
const { UpsertForecast } = require("./db");
const { GetForecast } = require("./db");
const { DateTime } = require("luxon");

async function GetLatestWeatherForecast(river, locationName) {
  return await RiverLocation.findOne({
    where: {
      name: river,
      location: locationName,
    },
  }).then((location) => {
    return GetForecast(river, location.locationID).then((data) => {
      return data;
    });
  });
}

async function StoreLatestForecastData(river, locationName) {
  //look up river locationID
  var location = await RiverLocation.findOne({
    where: {
      name: river,
      location: locationName,
    },
  });

  if (location == null) {
    console.log("no matching location");
    return {};
  }
  var forecasts = await weatherAPI.getForecast(
    location.data.latitude,
    location.data.longitude
  );

  var forecast = new WeatherForecast();
  forecast.river = river;
  forecast.locationID = location.locationID;
  forecast.data = forecasts;
  forecast.recordedAt = DateTime.local();
  await UpsertForecast(river, location.locationID, forecast);
}

module.exports.GetLatestWeatherForecast = GetLatestWeatherForecast;
module.exports.StoreLatestForecastData = StoreLatestForecastData;
