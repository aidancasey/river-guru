const axios = require("axios");
const { RiverLevel } = require("../models");
const { RiverLocation } = require("../models");
const { DateTime } = require("luxon");
const chalk = require("chalk");
const csv = require("csv-parse/sync");

async function BuildURL(river, location) {
  console.log(`Building URL for river ${river} at location ${location}`);
  return await RiverLocation.findOne({
    where: {
      name: river,
      location: location,
    },
  }).then((foundItem) => {
    if (!foundItem) {
      console.log(`No river location found for ${river} at ${location}`);
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
      console.log(`Generated URL: ${url}`);
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
    console.log(`No URL generated for river ${river} at location ${location}`);
    return [];
  }

  var riverLocation = await RiverLocation.findOne({
    where: {
      name: river,
      location: location,
    },
  });

  if (!riverLocation) {
    console.log(`No river location found for ${river} at ${location}`);
    return [];
  }

  try {
    console.log(`Fetching water levels from ${url}`);
    const response = await axios.get(url);
    
    if (!response.data) {
      console.log(`No data received from ${url}`);
      return [];
    }

    const rows = csv.parse(response.data, {
      columns: true,
      skip_empty_lines: true
    });

    if (!rows || rows.length === 0) {
      console.log(`No valid rows found in CSV data for ${river} at ${location}`);
      return [];
    }

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
      reading.mean = floorFigure(element.Mean, 2);
      reading.recordedAt = FormatToDateTime(element.Datetime);
      readings.push(reading);
    });

    console.log(`Successfully parsed ${readings.length} readings for ${river} at ${location}`);
    return readings;
  } catch (err) {
    console.error(`Error fetching water levels for ${river} at ${location}:`, err.message);
    if (err.response) {
      console.error('Response status:', err.response.status);
      console.error('Response data:', err.response.data);
    }
    return [];
  }
}

module.exports.GetWaterLevels = GetWaterLevels;
