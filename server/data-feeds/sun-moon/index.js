var SunCalc = require("suncalc");
const { RiverLocation } = require("../../models");
const { DateTime } = require("luxon");
const { SunCalendar } = require("../../models");
const { UpsertRiverSunTimes } = require("./db");
const { GetRiverSunTimesData } = require("./db");

async function GetSunTimes(date, latitude, longitude) {
  var today = DateTime.local();

  var details = SunCalc.getTimes(today, latitude, longitude);

  console.log("Sunrise is at :" + details.sunrise);
  console.log("Dawn is at :" + details.dawn);
  console.log("Sunset is at :" + details.sunset);
  console.log("Dusk is at :" + details.dusk);
  return details;
}

async function MoonPhase() {
  var lune = require("lune");
  var current_phase = lune.phase();
  console.log("Current Moon Phase Info is ....");
  console.log(current_phase);

  console.log(" Moon Phase Hunt info is ....");
  var recent_phases = lune.phase_hunt(new Date());
  console.log(recent_phases);

  console.log(" Next Full Moon Phases As follows ....");
  var today = DateTime.local();

  var phase_list = lune.phase_range(
    new Date(today.toISODate()),
    new Date(today.plus({ days: 30 }).toISODate()),
    lune.PHASE_FULL
  );
  console.log(phase_list);

  return current_phase;
}

async function StoreRiverSunTimes(river, locationName) {
  var location = await RiverLocation.findOne({
    where: {
      name: river,
      location: locationName,
    },
  });

  if (location == null) {
    console.log("no matching location");
    return {};
  } else {
    //its a valid river
    //console.log(JSON.stringify(location));
    var today = DateTime.local();
    var day1Details = SunCalc.getTimes(
      new Date(today.toISODate()),
      location.data.latitude,
      location.data.longitude
    );

    var day2Details = SunCalc.getTimes(
      new Date(today.plus({ days: 1 }).toISODate()),
      location.data.latitude,
      location.data.longitude
    );

    results = {};
    results.day1 = {};
    results.day2 = {};

    results.day1.sunrise = day1Details.sunrise;
    results.day1.dawn = day1Details.dawn;
    results.day1.dusk = day1Details.dusk;
    results.day1.sunset = day1Details.sunset;

    results.day2.sunrise = day2Details.sunrise;
    results.day2.dawn = day2Details.dawn;
    results.day2.dusk = day2Details.dusk;
    results.day2.sunset = day2Details.sunset;

    console.log("Sunrise details are *********************");
    console.log(JSON.stringify(results));

    var sunCal = new SunCalendar();
    sunCal.river = river;
    sunCal.locationID = location.locationID;
    sunCal.data = results;
    sunCal.recordedAt = DateTime.local();

    console.log("calling UpsertRiverSunTimes");
    // console.log(river);
    // console.log(location.locationID);
    console.log(JSON.stringify(sunCal));
    await UpsertRiverSunTimes(river, location.locationID, sunCal);

    return results;
  }
}

async function GetRiverSunTimes(river, locationName) {
  return await RiverLocation.findOne({
    where: {
      name: river,
      location: locationName,
    },
  }).then((location) => {
    return GetRiverSunTimesData(river, location.locationID).then((data) => {
      return data;
    });
  });
}

module.exports.GetSunTimes = GetSunTimes;
module.exports.GetRiverSunTimes = GetRiverSunTimes;
module.exports.StoreRiverSunTimes = StoreRiverSunTimes;
module.exports.MoonPhase = MoonPhase;
