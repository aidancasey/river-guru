const db = require('../models');

async function SaveFlowReadings(flowReadings) {
  var promises = [];
  promises.push(
    flowReadings.forEach((element) => {
      //    element.save();
      db.FlowReading.findOne({
        where: {
          river: element.river,
          locationID: element.locationID,
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
          console.log('**************************************')
          console.log('Flow Reading already exists... SKIPPING');
          console.log('**************************************')

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

module.exports.SaveFlowReadings = SaveFlowReadings;
