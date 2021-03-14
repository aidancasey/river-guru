const db = require('../models');

async function SaveTideTimes(tideTimes) {
  var promises = [];
  promises.push(
    tideTimes.forEach((element) => {
      //    element.save();
      db.TideTime.findOne({
        where: {
          location: element.location,
          time: element.time
        }
      }).then((foundItem) => {
        if (!foundItem) {
          // Item not found, create a new one
          element.save();
        }
        else {
          console.log('**************************************')
          console.log('Tide Times already exists... SKIPPING');
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

module.exports.SaveTideTimes = SaveTideTimes;
