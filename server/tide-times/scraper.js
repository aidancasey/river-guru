const rp = require('request-promise');
const $ = require('cheerio');
const { DateTime } = require('luxon');
const { TideTime } = require('../models');

async function GetTideTimes(location,startDate,noDays) {
     var url = BuildURL(location,startDate);
// Scrape the data
return await rp(url)
  .then(function(html) {
    var fragment = $('.times', html).text();
    var tides =FormatToJSON(fragment);
    var results = [];

    tides.low.forEach((element) => {
      tide = new TideTime();
      tide.location = location;
      tide.height=element.height;

      var hh = element.time.split(":")[0];
      var mm = element.time.split(":")[1];

      tide.time = DateTime.fromObject({
        year:startDate.year,
        month:startDate.month, 
        day: startDate.day, 
        hour: hh, 
        minute: mm
      }); 
      tide.hilo ='low';
      results.push(tide);
  });

  tides.high.forEach((element) => {
    tide = new TideTime();
    tide.location = location;
    tide.height=element.height;

    var hh = element.time.split(":")[0];
    var mm = element.time.split(":")[1];

    tide.time = DateTime.fromObject({
      year:startDate.year,
      month:startDate.month, 
      day: startDate.day, 
      hour: hh, 
      minute: mm
    }); 
    tide.hilo ='high';
    results.push(tide);
});

    return results;
  })
  .catch(function(err) {
    console.log(err);
    return null;
  }); 
}


function BuildURL(location,date){
    //https://www.tidetimes.co.uk/cork-city-tide-times-20210217'

    var baseURL = 'https://www.tidetimes.co.uk/';
    if (location.toLowerCase() == "cork"){
      baseURL = baseURL + 'cork-city-tide-times-'
    }
    else{
        throw "unsupported location for tide times " + location;
    }
    baseURL= baseURL + DateTime.fromISO(date).toFormat('yyyyMMdd')
    return baseURL;
}

  //https://github.com/digitalfrost/tidetimes
  // Format the scaped tide times by removing extra spaces, adding a line break after m, and removing the leading spaces
  function FormatToText(times) {
    return times.replace(/\s+/g, " ").replace(/m /g, "m\n").substring(1);
  }

  function FormatToJSON(times) {
    text = FormatToText(times);
    json = {"low" : [], "high" : []}
    a = text.split("\n");
    a.pop(); //get rid of last value due to trailigng \n
    timeRegex = /([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/ ;
    hightRegex = /[0-9]*\.[0-9]{2}/ ;
    a.map(function(line){
         time = line.match(timeRegex)[0]
         hight = line.match(hightRegex)[0]
         tide = {"time" : time , "height" : hight}
       if (line[0] == "H") {
             json["high"].push(tide)
       } else {
             json["low"].push(tide)
       }
    })
    return  json;
 }

module.exports.GetTideTimes = GetTideTimes;
module.exports.BuildURL = BuildURL;
