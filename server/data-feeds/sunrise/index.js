var SunCalc = require("suncalc");

async function GetSunriseDetails(date, latitude, longitude) {
  var times = SunCalc.getTimes(new Date(), 51.8974, -8.5688);

  console.log(JSON.stringify(times));
  return times;
}

module.exports.GetSunriseDetails = GetSunriseDetails;
