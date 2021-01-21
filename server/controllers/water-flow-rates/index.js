const db = require('./db');
const scraper = require('./dataScraper');

async function UpdateData() {
  scraper.DownloadLatestPDF()
    .then((filePath) => scraper.ExtractRawFlowDataFromPDF(filePath))
    .then((rawData) => scraper.ConvertToFlowReadings(rawData))
    .then((readings, err) => {
     
     console.log('need to save...');
     console.log(JSON.stringify(readings));
     // db.SaveFlowReadings(readings);
    })
    .catch((error) => {
      console.log('Error Occured ', error);
    });
}

async function GetLatestWaterLevels() {
  var readings = await db.GetReadingsFromPast24Hours();
  return readings;
}

module.exports.UpdateData = UpdateData;
module.exports.GetLatestWaterLevels = GetLatestWaterLevels;
