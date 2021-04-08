const { DateTime } = require("luxon");
const { GetRiverSunTimes } = require("../data-feeds/sun-moon");

module.exports = {
  GetLatestRiverSunTimes(river, location, req, res) {
    GetRiverSunTimes(river, location).then((result) => {
      res.send(result);
    });
  },
};
