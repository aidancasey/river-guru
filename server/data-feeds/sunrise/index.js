var SunCalc = require("suncalc");
const { RiverLocation } = require("../../models");

async function GetSunTimes(date, latitude, longitude) {
  var details = SunCalc.getTimes(new Date(), latitude, longitude);

  console.log("Sunrise is at :" + details.sunrise);
  console.log("Dawn is at :" + details.dawn);
  console.log("Sunset is at :" + details.sunset);
  console.log("Dusk is at :" + details.dusk);
  return details;
}

async function GetRiverSunTime(river, locationName) {
  var location = await RiverLocation.findOne({
    where: {
      name: river,
      location: locationName,
    },
  });

  console.log("location details");

  console.log(JSON.stringify(location));

  var details = SunCalc.getTimes(
    new Date(),
    location.data.latitude,
    location.data.longitude
  );

  console.log("Sunrise is at :" + details.sunrise);
  console.log("Dawn is at :" + details.dawn);
  console.log("Sunset is at :" + details.sunset);
  console.log("Dusk is at :" + details.dusk);
  return details;
}

module.exports.GetSunTimes = GetSunTimes;
module.exports.GetRiverSunTime = GetRiverSunTime;
