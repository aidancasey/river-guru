const db = require('../models');

async function SaveFlowReadings(flowReadings) {
  var promises = [];
  promises.push(
    flowReadings.forEach((element) => {
      //    element.save();
      db.FlowReading.findOne({
        where: {
          river: element.river,
          location: element.location,
          recordedAt: element.recordedAt
        }
      }).then((foundItem) => {
        if (!foundItem) {
          // Item not found, create a new one
          element.save();
          //   .then(onCreate)
          //   .catch(onError);
        }
        else {
          console.log('already exists... SKIPPING');
        }
      })
        .catch((err) => {
          console.log(err);
        });
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
