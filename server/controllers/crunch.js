const { UpdateData } = require('../water-flow-rates');

module.exports = {
  Foo(req, res) {
    UpdateData().then(res.send('data crunchified'));
  }
};
