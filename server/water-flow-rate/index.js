const db = require('./dataLoader');
const scraper = require('./dataScraper');

 

function UpdateData()
{
    var data = scraper.GetLatestData();
console.log(JSON.stringify(data));

};

module.exports.UpdateData = UpdateData;