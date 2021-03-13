const db = require('../models');

async function SaveRiverLevels(data) {
  var promises = [];
  promises.push(
    data.forEach((element) => {
      //    element.save();
      db.RiverLevel.findOne({
        where: {
          river: element.river,
          locationID: element.locationID,
          recordedAt : element.recordedAt
        }
      }).then((foundItem) => {
        if (!foundItem) {
          // Item not found, create a new one
          element.save();
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

module.exports.SaveRiverLevels = SaveRiverLevels;
