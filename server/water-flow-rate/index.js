const db = require('./db');
const scraper = require('./dataScraper');

function UpdateData() {
  var data = scraper.GetLatestData();
  console.log(JSON.stringify(data));
  db.Save(data);
}

module.exports.UpdateData = UpdateData;
