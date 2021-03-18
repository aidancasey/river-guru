const { StoreLatestFlowReadings } = require('../water-flow-rates');
const { StoreMissingTideTimes } = require('../tide-times');
const { StoreMissingWaterLevels } = require('../opw-water-levels');
const { DeleteOldWaterLeveLReadings } = require('../opw-water-levels');


module.exports = {
  Karunch(req, res) {
    // store latest tide times
    StoreMissingTideTimes('cork')
      .then(StoreLatestFlowReadings)
      .then(StoreMissingWaterLevels('bandon','curranure'))
      .then(StoreMissingWaterLevels('blackwater','fermoy'))
      .then(StoreMissingWaterLevels('blackwater','ballyduff'))
      .then(StoreMissingWaterLevels('owenboy','ballea'))
      .then(DeleteOldWaterLeveLReadings())
      .then(res.send('data crunchified'));
  }
};
