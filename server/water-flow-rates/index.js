const db = require("./db");
const scraper = require("./dataScraper");

async function StoreLatestFlowReadings() {
  try {
    console.log('Downloading latest PDF...');
    const filePath = await scraper.DownloadLatestPDF();
    
    console.log('Extracting raw flow data from PDF...');
    const rawData = await scraper.ExtractRawFlowDataFromPDF(filePath);
    
    if (!rawData || rawData.length === 0) {
      console.log('No flow data found in PDF');
      return;
    }
    
    console.log(`Found ${rawData.length} flow readings`);
    console.log('Converting to flow readings...');
    const readings = await scraper.ConvertToFlowReadings(rawData);
    
    console.log('Saving flow readings...');
    await db.SaveFlowReadings(readings);
    
    console.log('Successfully stored flow readings');
  } catch (error) {
    console.error('Error storing flow readings:', error);
    throw error;
  }
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
