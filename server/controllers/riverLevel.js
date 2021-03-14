const { DateTime } = require('luxon');
const { GetLatestWaterLevelReadings } = require('../opw-water-levels');

module.exports = {
  GetLatest(river,location, req, res) {
    GetLatestWaterLevelReadings(river, location).then((result) => {
      res.send(result);
    });
  }
};
