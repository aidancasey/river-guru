const getCSV = require("get-csv");
const { RiverLevel } = require("../models");
const { RiverLocation } = require("../models");
const { DateTime } = require("luxon");
const chalk = require("chalk");

async function BuildURL(river, location) {
  return await RiverLocation.findOne({
    where: {
      name: river,
      location: location,
    },
  }).then((foundItem) => {
    if (!foundItem) {
      console.log("riverlocation not found");
      return "";
    } else {
      var locationId = foundItem.data.station;
      var timestamp = DateTime.fromISO(new Date().toISOString()).toFormat(
        "yyyyMMddHHmm"
      );
      var url =
        "https://waterlevel.ie/" +
        locationId +
        "/0001/summary/download/data.csv?" +
        timestamp;
      return url;
    }
  });
}

function FormatToDateTime(input) {
  if (input.length < 11) {
    return DateTime.fromFormat(input, "yyyy-MM-dd").toISO();
  } else {
    return DateTime.fromFormat(input, "yyyy-MM-dd hh:mm").toISO();
  }
}

function floorFigure(figure, decimals) {
  if (!decimals) decimals = 2;
  var d = Math.pow(10, decimals);
  return (parseInt(figure * d) / d).toFixed(decimals);
}

async function GetWaterLevels(river, location) {
  var url = await BuildURL(river, location);

  if (url.length == 0) {
    return [];
  }

  var riverLocation = await RiverLocation.findOne({
    where: {
      name: river,
      location: location,
    },
  });

  return await getCSV(url).then((rows) => {
    console.log(rows);
    var readings = [];
    rows.forEach((element) => {
      var reading = new RiverLevel();
      reading.river = river;
      reading.locationID = riverLocation.locationID;
      if (element.Value != "") {
        reading.value = element.Value;
      }
      if (element.Min != "") {
        reading.min = element.Min;
      }
      if (element.Max != "") {
        reading.max = element.Max;
      }
      //   reading.min = element.Min;
      //   reading.max = element.Max;
      reading.mean = floorFigure(element.Mean, 2);

      reading.recordedAt = FormatToDateTime(element.Datetime);
      readings.push(reading);
    });
    return readings;
  });
  /*     .catch((err) => {
      console.log(chalk.blue("*******************YIKES ********************"));
      console.log(err);
      return [];
    }); */
}
module.exports.GetWaterLevels = GetWaterLevels;
