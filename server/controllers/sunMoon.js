const { DateTime } = require("luxon");
const { GetRiverSunTime } = require("../data-feeds/sun-moon");

module.exports = {
  GetLatestRiverSunTimes(river, location, req, res) {
    GetRiverSunTime(river, location).then((result) => {
      res.send(result);
    });
  },
};
