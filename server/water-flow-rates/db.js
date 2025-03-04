const db = require("../models");
const { Op } = require("../models").Sequelize;
const { DateTime } = require("luxon");

async function SaveFlowReadings(flowReadings) {
  try {
    for (const element of flowReadings) {
      const foundItem = await db.FlowReading.findOne({
        where: {
          river: element.river,
          locationID: element.locationID,
          recordedAt: element.recordedAt,
        },
      });

      if (!foundItem) {
        // Item not found, create a new one
        await element.save();
        console.log("Saved new flow reading");
      } else {
        console.log("**************************************");
        console.log("Flow Reading already exists... SKIPPING");
        console.log("**************************************");
      }
    }
    console.log("done all the saving");
  } catch (err) {
    console.error("Error saving flow readings:", err);
    throw err;
  }
}

async function DeleteOldWaterLevels(daysToKeep) {
  var lastDay = new Date();
  lastDay.setDate(lastDay.getDate() - daysToKeep);

  return db.FlowReading.destroy({
    where: {
      river: "lee",
      locationID: 1,
      recordedAt: {
        [Op.lte]: lastDay,
      },
    },
  });
}

module.exports.SaveFlowReadings = SaveFlowReadings;
module.exports.DeleteOldWaterLevels = DeleteOldWaterLevels;
