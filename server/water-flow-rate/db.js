const db = require('../models/flowReading.model');

async function SaveFlowReadings(flowReadings) {
  flowReadings.forEach((element) => {
    db.findOne({
      river: element.river,
      location: element.location,
      recordedAt: element.recordedAt
    }, (err, docs) => {
      if (docs == null) {
        element.save();
      }
      else {
        console.log('already exists skipping: ', element.recordedAt);
      }
    });
  });
  return true;
}

/* async function SaveFlowReadings1(flowReadings) {

  return new Promise.((resolve, reject) => {

    const query = { name: 'borne' };
    flowReadings[0].findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)

    resolve('tis done');
  });
} */
module.exports.SaveFlowReadings = SaveFlowReadings;
