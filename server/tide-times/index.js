const db = require('../models');
const scraper = require('./scraper');
const { DateTime } = require('luxon');


  function StoreTideTimesData(location,fromDate, numberOfDays) {
   scraper.GetTideTimes()
  }

  function GetTideTimes(location,date) {
    
    var dayStart = DateTime.fromObject({
      year:date.year,
      month:date.month, 
      day: date.day, 
      hour: 00, 
      minute: 01
    }); 
    
    var dayEnd = DateTime.fromObject({
      year:date.year,
      month:date.month, 
      day: date.day, 
      hour: 23, 
      minute: 59
    });

    return db.TideTime.findAll({
      where: {
        location: location,
        time: {
          $between: [dayStart, dayEnd]}
      },
      order: [
        ['time', 'DESC']
      ]
   }).then((data)=>{
   return data;
  })
   .catch((err)=>{
     console.log(err)
     return [];
   })
  }

module.exports.StoreTideTimesData = StoreTideTimesData;
module.exports.GetTideTimes =GetTideTimes;
