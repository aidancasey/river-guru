const db = require('./db');
const scraper = require('./dataScraper');

async function UpdateData() {
  scraper.DownloadLatestPDF()
    .then((filePath) => {
    return scraper.ExtractRawFlowDataFromPDF(filePath);
    })
    .then((data) => {
      return scraper.ConvertToFlowReadings(data)
      })
    .then((readings, err) => {
      db.SaveFlowReadings(readings);
    })
    .catch((error) => {
      console.log('Error Occured ', error);
    });
}

module.exports.UpdateData = UpdateData;
