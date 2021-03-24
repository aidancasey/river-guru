const weatherAPI = require("weather-ireland-js");
const { WeatherForecast } = require("../../models");
const { RiverLocation } = require("../../models");
const { UpsertForecast } = require("./db");
const { DateTime } = require("luxon");

async function GetForecast(river, locationName) {
  //look up river locationID
  var location = await RiverLocation.findOne({
    where: {
      name: river,
      location: locationName,
    },
  });

  if (location == null) {
    return {};
  }

  var result = await db.GetForecast(river, locationID);

  return result;
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
  console.log("location id is " + location.locationID);

  var forecasts = await weatherAPI.getForecast(
    location.data.latitude,
    location.data.longitude
  );

  var forecast = new WeatherForecast();
  forecast.river = river;
  forecast.locationID = location.locationID;
  forecast.data = forecasts;
  forecast.recordedAt = DateTime.local();

  // Createor Upsert Forecast
  console.log("need to save");
  //console.log(JSON.stringify(forecast));

  await UpsertForecast(river, location.locationID, forecast);
}

module.exports.GetForecast = GetForecast;
module.exports.StoreLatestForecastData = StoreLatestForecastData;
