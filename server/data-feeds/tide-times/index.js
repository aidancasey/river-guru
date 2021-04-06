const { DateTime } = require("luxon");
const db = require("../../models");
const { Op } = require("../../models").Sequelize;
const { SaveTideTimes } = require("./db");
const scraper = require("./scraper");

function StoreTideTimesData(place, date) {
  scraper.GetTideTimes(place, date).then((data) => {
    SaveTideTimes(data);
  });
}

async function GetTideTimes(place, date) {
  var dayStart = DateTime.fromObject({
    year: date.year,
    month: date.month,
    day: date.day,
    hour: 0,
    minute: 1,
    second: 0,
    millisecond: 0,
  });

  var dayEnd = DateTime.fromObject({
    year: date.year,
    month: date.month,
    day: date.day,
    hour: 23,
    minute: 59,
    second: 0,
    millisecond: 0,
  });

  return db.TideTime.findAll({
    where: {
      location: place,
      time: { [Op.between]: [dayStart.toISO(), dayEnd.toISO()] },
    },
    order: [["time", "DESC"]],
  })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [];
    });
}

async function StoreMissingTideTimes(location) {
  var today = DateTime.local();
  return GetTideTimes(location, today).then((data) => {
    if (data.length === 0) {
      console.log("no tide data in db");
      StoreTideTimesData(location, today);
    } else {
      console.log("tides already populated");
    }
  });
}

async function DeleteAllTideTimes() {
  console.log("*********************************");
  console.log("*********************************");
  console.log("*********DELETING ALL TIDE TIMES********");

  var now = new Date();

  return db.TideTime.destroy({
    where: {
      createdAt: {
        [Op.lte]: now,
      },
    },
  });
}

module.exports.StoreTideTimesData = StoreTideTimesData;
module.exports.GetTideTimes = GetTideTimes;
module.exports.DeleteAllTideTimes = DeleteAllTideTimes;
module.exports.StoreMissingTideTimes = StoreMissingTideTimes;
