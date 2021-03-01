const db = require('../models');

async function SaveTideTimes(tideTimes) {
  var promises = [];
  promises.push(
    tideTimes.forEach((element) => {
      //    element.save();
      db.TideTime.findOne({
        where: {
          river: element.river,
          time: element.time
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

module.exports.SaveTideTimes = SaveTideTimes;
