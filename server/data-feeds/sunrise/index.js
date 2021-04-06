var SunCalc = require("suncalc");

async function GetSunriseDetails(date, latitude, longitude) {
  // SolarCalc(date,lat,long)
  // get today's sunlight times for London
  var times = SunCalc.getTimes(new Date(), 51.8974, -8.5688);

  //  var solar = new SolarCalc(new Date("April 6 2021"), 51.8974, -8.5688);

  console.log(JSON.stringify(times));
  return times;
}

module.exports.GetSunriseDetails = GetSunriseDetails;
