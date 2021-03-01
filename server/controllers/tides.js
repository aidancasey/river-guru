const { GetTideTimes } = require('../tide-times');

module.exports = {
  GetTides(req, res) {
    GetTideTimes().then((result)=>res.send(result));
  }
};
