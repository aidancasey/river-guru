const { StoreLatestFlowReadings } = require('../water-flow-rates');
const { StoreMissingTideTimes } = require('../tide-times');

module.exports = {
  Karunch(req, res) {

    // store latest tide times
    StoreMissingTideTimes('cork')
    .then(StoreLatestFlowReadings)
    .then(res.send('data crunchified'));
  }
};
