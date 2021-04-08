/* eslint-env mocha */
var assert = require("assert");
const { DateTime } = require("luxon");
var index = require("../data-feeds/sun-moon/index.js");

describe("sunrise-calculator", () => {
  describe("#GetSunTimes()", () => {
    it("should return sunrise details when passed valid lat and log co-ordinates", async () => {
      // const now = DateTime.fromISO(new Date().toISOString());
      var info = await index.GetSunTimes("foo", 51.8974, -8.5688);
      assert.equal(info.sunset != null, true);
    });
  });

  describe("#GetRiverSunTime()", () => {
    it("should return a sunrise and sunset times when passed a valid river and location name", async () => {
      await index.StoreRiverSunTimes("blackwater", "fermoy");
      var info = await index.GetRiverSunTimes("blackwater", "fermoy");
      assert.equal(info.data.day1.sunrise != null, true);
      assert.equal(info.data.day2.sunrise != null, true);
    });
  });
  describe("#MoonPhase()", () => {
    it("should return the moon phase info", async () => {
      var info = await index.MoonPhase();
      assert.equal(info != null, true);
    });
  });
});
