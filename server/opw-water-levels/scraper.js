const getCSV = require('get-csv');
const { RiverLevel } = require('../models');
const { RiverLocation } = require('../models');
const { DateTime } = require('luxon');


async function BuildURL(river, location) {
  return await RiverLocation.findOne({
    where: {
      name: river,
      location: location
    }
  }).then((foundItem) => {
    if (!foundItem) {
      console.log('riverlocation not found');
      return '';
    }
    else {
      var locationId = foundItem.data.station;
      var timestamp = DateTime.fromISO(new Date().toISOString()).toFormat('yyyyMMddHHmm')
      var url = "https://waterlevel.ie/" + locationId + "/0001/summary/download/data.csv?" + timestamp;
      return url;
    }
  })
}

async function GetWaterLevels(river, location) {
  var url = await BuildURL(river, location);

  if (url.length == 0) {
    return [];
  }

  console.log('fetching ' + url);
  return await getCSV(url)
    .then((rows) => {
      var readings = [];
      rows.forEach(element => {
        var reading = new RiverLevel();
        reading.river = river;
        reading.locationID = location;
        reading.value = element.Value;
        reading.min = element.Min;
        reading.max = element.Max;
        reading.mean = element.Mean;
        readings.push(reading);
      });
      return readings;
    })
}



module.exports.GetWaterLevels = GetWaterLevels;

