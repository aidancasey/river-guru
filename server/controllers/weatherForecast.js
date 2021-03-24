const { StoreLatestForecastData } = require("../data-feeds/weather-forecast");

module.exports = {
  StoreLatestForecast(river, location, req, res) {
    StoreLatestForecastData(river, location).then((result) => {
      res.send("store zee ");
    });
  },
};
