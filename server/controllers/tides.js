const { index } = require('../tide-times');
const { DateTime } = require('luxon');

module.exports = {
  GetLatestTides(place,req, res) {
    var today = DateTime.local();
    index.GetTides(place,today).then((result)=>{res.send(result)});
  }
};
