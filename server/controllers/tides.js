const { GetTimesTimes } = require('../tide-times');

module.exports = {
  GetTides(req, res) {
    GetTimesTimes().then((result)=>res.send(result));
  }
};
