const getCSV = require('get-csv');
const { RiverLevel } = require('../models');

async function GetWaterLevels(river,location) {
    var url = "https://waterlevel.ie/0000020002/0001/summary/download/data.csv?1615580487";
    return await getCSV(url)
      .then((rows) => {
          var readings  = [];
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

