const { GetTimesTimes } = require('../tide-times');

module.exports = {
  GetTides(req, res) {
    GetTimesTimes();
    res.send('phew');
  }
};
