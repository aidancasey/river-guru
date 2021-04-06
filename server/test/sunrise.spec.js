/* eslint-env mocha */
var assert = require("assert");
const { DateTime } = require("luxon");
var index = require("../data-feeds/sunrise/index.js");

describe("sunrise-calculator", () => {
  describe("#GetSunriseDetails()", () => {
    it("should return a valid URL when passed a valid location and date", () => {
      const now = DateTime.fromISO(new Date().toISOString());
      var solarInfo = index.GetSunriseDetails(now, 1, 3);
      assert.equal(solarInfo != null, true);
    });
  });
});
