const { GetLatestWeatherForecast } = require("../data-feeds/weather-forecast");

module.exports = {
  GetLatestForecast(river, location, req, res) {
    GetLatestWeatherForecast(river, location).then((result) => {
      res.send(result);
    });
  },
};
