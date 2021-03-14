const { StoreLatestFlowReadings } = require('../water-flow-rates');
const { StoreMissingTideTimes } = require('../tide-times');
const { StoreMissingWaterLevels } = require('../opw-water-levels');


module.exports = {
  Karunch(req, res) {
    // store latest tide times
    StoreMissingTideTimes('cork')
      .then(StoreLatestFlowReadings)
      .then(StoreMissingWaterLevels('bandon','curranure'))
      .then(StoreMissingWaterLevels('blackwater','fermoy'))
      .then(res.send('data crunchified'));
  }
};
