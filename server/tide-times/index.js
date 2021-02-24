const rp = require('request-promise');
const $ = require('cheerio');


async function GetTimesTimes() {
     console.log('innit');
     var url = 'https://www.tidetimes.co.uk/cork-city-tide-times-20210217';
// Scrape the data
return await rp(url)
  .then(function(html) {
    var fragment = $('.times', html).text();
    var result =FormatToJSON(fragment);
    return result;
  })
  .catch(function(err) {
    console.log(err);
    //handle error
  }); 
}


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
         tide = {"time" : time , "hight" : hight}
       if (line[0] == "H") {
             json["high"].push(tide)
       } else {
             json["low"].push(tide)
       }
    })
    return  json;
 }

  
module.exports.GetTimesTimes = GetTimesTimes;
