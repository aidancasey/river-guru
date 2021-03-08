const { DateTime } = require('luxon');
const { GetTideTimes } = require('../tide-times');

module.exports = {
  GetLatestTides(place, req, res) {
    var today = DateTime.local();
    GetTideTimes(place, today).then((result) => {
      res.send(result);
    });
  }
};
