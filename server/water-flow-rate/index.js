const db = require('./db');
const scraper = require('./dataScraper');

async function UpdateData() {
  var data = await scraper.GetLatestData();
  //db.Save(data);
}

module.exports.UpdateData = UpdateData;
