const db = require("./db");
const scraper = require("./dataScraper");

async function StoreLatestFlowReadings() {
  scraper
    .DownloadLatestPDF()
    .then((filePath) => scraper.ExtractRawFlowDataFromPDF(filePath))
    .then((rawData) => scraper.ConvertToFlowReadings(rawData))
    .then((readings, err) => {
      //console.log('need to save...');
      //console.log(JSON.stringify(readings));
      db.SaveFlowReadings(readings);
    })
    .catch((error) => {
      console.log("Error Occured ", error);
    });
}

async function DeleteOldWaterLevels(daysToKeep) {
  console.log("*********************************");
  console.log("*********************************");
  console.log("*********DELETING OLD RIVER LEE WATER FLOW READINGS********");
  return await db.DeleteOldWaterLevels(daysToKeep);
}

async function GetLatestWaterLevels() {
  var readings = await db.GetReadingsFromPast24Hours();
  return readings;
}

module.exports.StoreLatestFlowReadings = StoreLatestFlowReadings;
module.exports.GetLatestWaterLevels = GetLatestWaterLevels;
module.exports.DeleteOldWaterLevels = DeleteOldWaterLevels;
