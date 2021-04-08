const { SunCalendar } = require("../../models");
const { DateTime } = require("luxon");

async function GetRiverSunTimesData(river, locationID) {
  return SunCalendar.findOne({
    where: {
      river: river,
      locationID: locationID,
    },
  });
}

async function UpsertRiverSunTimes(river, locationID, sunCalendar) {
  await SunCalendar.findOne({
    where: {
      river: river,
      locationID: locationID,
    },
  }).then((foundItem) => {
    if (!foundItem) {
      sunCalendar.save();
    } else {
      foundItem.data = sunCalendar.data;
      foundItem.recordedAt = DateTime.local();
      foundItem.save();
    }
  });
}

module.exports.GetRiverSunTimesData = GetRiverSunTimesData;
module.exports.UpsertRiverSunTimes = UpsertRiverSunTimes;
