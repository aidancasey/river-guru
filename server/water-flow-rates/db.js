const db = require('../models');

async function SaveFlowReadings(flowReadings) {
  var promises = [];
  promises.push(
    flowReadings.forEach((element) => {
      element.save();
    })
  );
  await Promise.all(promises).then(() => {
    console.log('done all the saving');
  });
}

async function GetReadingsFromPast24Hours() {
  return db.FlowReading.findAll();
/*   return await db.aggregate([
    { $match: { recordedAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } } },
    { $sort: { recordedAt: -1 } }
  ]).then((data) => data); */
}

module.exports.SaveFlowReadings = SaveFlowReadings;
module.exports.GetReadingsFromPast24Hours = GetReadingsFromPast24Hours;
