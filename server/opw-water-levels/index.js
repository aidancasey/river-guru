const scraper = require("./scraper");
const { RiverLevel } = require("../models");
const { RiverLocation } = require("../models");
const { SaveRiverLevels } = require("./db");
const { Op } = require("../models").Sequelize;
const { DateTime } = require("luxon");

async function StoreMissingWaterLevels(river, location) {
  console.log("******************************");
  console.log("StoreMissingWaterLevels");
  console.log("******************************");
  // get latest data from OPW

  var latestReadings = await scraper.GetWaterLevels(river, location);

  //look up river locationID
  var location = await RiverLocation.findOne({
    where: {
      name: river,
      location: location,
    },
  });

  //get the latest record from db, need to store everything newer that this
  var latestSavedRiverLevel = await RiverLevel.findOne({
    where: {
      river: river,
      locationID: location.locationID,
    },
    order: [["recordedAt", "DESC"]],
  });

  return await SaveRiverLevels(latestReadings);

  /*   if (latestSavedRiverLevel == null) {
    return await SaveRiverLevels(latestReadings);
  } else {
    //filter newReadings to remove ones older already stored in db
    var newReadings = latestReadings.filter(function(item) {
      return item.recordedAt > latestSavedRiverLevel.recordedAt;
    });
    return await SaveRiverLevels(newReadings);
  } */
}

async function GetLatestWaterLevelReadings(river, location) {
  //look up river locationID
  var location = await RiverLocation.findOne({
    where: {
      name: river,
      location: location,
    },
  });
  var fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 20);

  return RiverLevel.findAll({
    where: {
      river: river,
      locationID: location.locationID,
      recordedAt: {
        [Op.gte]: fromDate,
      },
    },
    // Add order conditions here....
    order: [["recordedAt", "DESC"]],
  });
}
async function DeleteOldWaterLeveLReadings() {
  console.log("*********************************");
  console.log("*********************************");
  console.log("*********DELETING OLD WATER LEVEL DATA********");

  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return RiverLevel.destroy({
    where: {
      mean: 0,
      recordedAt: {
        [Op.lte]: yesterday,
      },
    },
  });
}

module.exports.GetLatestWaterLevelReadings = GetLatestWaterLevelReadings;
module.exports.StoreMissingWaterLevels = StoreMissingWaterLevels;
module.exports.DeleteOldWaterLeveLReadings = DeleteOldWaterLeveLReadings;
