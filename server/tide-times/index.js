const db = require('../models');
const Op = require('../models').Sequelize.Op;
const {SaveTideTimes} = require('./db');
const scraper = require('./scraper');
const { DateTime } = require('luxon');

async function StoreMissingTideTimes(location){
  var today = DateTime.local();
  return GetTideTimes(location,today).then((data)=>{
    if (data.length ==0){
      console.log('no tide data in db');
      StoreTideTimesData(location,today)
    }else {
      console.log('tides already populated');
    }
  })
}

  function StoreTideTimesData(place,date) {
   scraper.GetTideTimes(place,date).then((data)=>{
    SaveTideTimes(data)
   })
  }

  async function GetTideTimes(place,date) {
    
    var dayStart = DateTime.fromObject({
      year:date.year,
      month:date.month, 
      day: date.day, 
      hour: 0, 
      minute: 01,
      second :0,
      millisecond : 0
      
    }); 
    
    var dayEnd = DateTime.fromObject({
      year:date.year,
      month:date.month, 
      day: date.day, 
      hour: 23, 
      minute: 59,
      second :0,
      millisecond : 0
    });

    return db.TideTime.findAll({
       where: {
        location: place,
        time: {
          [Op.between]: [dayStart.toISO(),dayEnd.toISO()]}
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
module.exports.StoreMissingTideTimes =StoreMissingTideTimes;
