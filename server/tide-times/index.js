const db = require('./db');
const scraper = require('./scraper');


  function StoreTideTimesData(location,fromDate, numberOfDays) {
   scraper.GetTideTimes()
  }

  
module.exports.StoreTideTimesData = StoreTideTimesData;
