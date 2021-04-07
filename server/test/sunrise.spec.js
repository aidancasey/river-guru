/* eslint-env mocha */
var assert = require("assert");
const { DateTime } = require("luxon");
var index = require("../data-feeds/sunrise/index.js");

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
      var info = await index.GetRiverSunTime("blackwater", "fermoy");
      assert.equal(info.sunrise != null, true);
    });
  });
});
