const db = require('../models/flowReading.model');

async function SaveFlowReadings(flowReadings) {
  var promises = [];
  promises.push(
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
    })
  );
  await Promise.all(promises).then(() => {
    console.log('done all the saving');
  });
}

async function GetReadingsFromPast24Hours() {
  return await db.aggregate([
    { $match: { recordedAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } } },
    { $sort: { recordedAt: -1 } }
  ]).then((data) => data);
}

module.exports.SaveFlowReadings = SaveFlowReadings;
module.exports.GetReadingsFromPast24Hours = GetReadingsFromPast24Hours;
