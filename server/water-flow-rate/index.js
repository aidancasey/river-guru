const db = require('./db');
const scraper = require('./dataScraper');
const FlowReadingModel = require('../models/flowReading.model');

async function UpdateData() {
  scraper.DownloadLatestPDF()
    .then((filePath) => scraper.ExtractRawFlowDataFromPDF(filePath))
    .then((rawData) => scraper.ConvertToFlowReadings(rawData))
    .then((readings, err) => {
      db.SaveFlowReadings(readings);
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
