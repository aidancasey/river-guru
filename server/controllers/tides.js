const { DateTime } = require("luxon");
const { GetTideTimes } = require("../data-feeds/tide-times");

module.exports = {
  GetLatestTides(place, req, res) {
    var today = DateTime.local();
    GetTideTimes(place, today).then((result) => {
      res.send(result);
    });
  },
};
