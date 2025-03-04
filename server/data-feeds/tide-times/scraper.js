const axios = require("axios");
const cheerio = require("cheerio");
const { DateTime } = require("luxon");
const { TideTime } = require("../../models");

function BuildURL(place, date) {
  // https://www.tidetimes.co.uk/cork-city-tide-times-20210217'

  var baseURL = "https://www.tidetimes.co.uk/";
  if (place.toLowerCase() === "cork") {
    baseURL = `${baseURL}cork-city-tide-times-`;
  } else if (place.toLowerCase() === "youghal") {
    baseURL = `${baseURL}youghal-tide-times-`;
  } else if (place.toLowerCase() === "kinsale") {
    baseURL = `${baseURL}kinsale-tide-times-`;
  } else {
    throw `unsupported location for tide times ${loc}`;
  }
  baseURL += DateTime.fromISO(date).toFormat("yyyyMMdd");
  return baseURL;
}

async function GetTideTimes(place, startDate) {
  var url = BuildURL(place, startDate);
  // Scrape the data
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    var fragment = $(".times").text();
    var tides = FormatToJSON(fragment);
    var results = [];

    tides.low.forEach((element) => {
      var tide = new TideTime();
      tide.location = place;
      tide.height = element.height;

      var hh = element.time.split(":")[0];
      var mm = element.time.split(":")[1];

      tide.time = DateTime.fromObject({
        year: startDate.year,
        month: startDate.month,
        day: startDate.day,
        hour: hh,
        minute: mm,
        zone: "Europe/Dublin"
      });
      tide.hilo = "low";
      results.push(tide);
    });

    tides.high.forEach((element) => {
      tide = new TideTime();
      tide.location = place;
      tide.height = element.height;

      var hh = element.time.split(":")[0];
      var mm = element.time.split(":")[1];

      tide.time = DateTime.fromObject({
        year: startDate.year,
        month: startDate.month,
        day: startDate.day,
        hour: hh,
        minute: mm,
        zone: "Europe/Dublin"
      });
      tide.hilo = "high";
      results.push(tide);
    });

    return results;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// https://github.com/digitalfrost/tidetimes
// Format the scaped tide times by removing extra spaces, adding a line break after m, and removing the leading spaces
function FormatToText(times) {
  return times
    .replace(/\s+/g, " ")
    .replace(/m /g, "m\n")
    .substring(1);
}

function FormatToJSON(times) {
  var text = FormatToText(times);
  var json = { low: [], high: [] };
  var a = text.split("\n");
  a.pop(); // get rid of last value due to trailigng \n
  var timeRegex = /([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/;
  var hightRegex = /[0-9]*\.[0-9]{2}/;
  a.map((line) => {
    var time = line.match(timeRegex)[0];
    var hight = line.match(hightRegex)[0];
    var tide = { time, height: hight };
    if (line[0] === "H") {
      json.high.push(tide);
    } else {
      json.low.push(tide);
    }
  });
  return json;
}

module.exports.GetTideTimes = GetTideTimes;
module.exports.BuildURL = BuildURL;
