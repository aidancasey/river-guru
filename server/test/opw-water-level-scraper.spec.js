/* eslint-env mocha */
var assert = require("assert");
var scraper = require("../opw-water-levels/scraper.js");

describe("opw-water-level-scraper", () => {
  describe("#GetWaterLevels", () => {
    it("returns water levels when called with valid parameters for river bandon", async () => {
      var data = await scraper.GetWaterLevels("bandon", "curranure");
      assert.equal(data.length > 10, true, true);
    });
  });

  describe("#GetWaterLevels", () => {
    it("returns water levels when called with valid parameters for river bandon", async () => {
      var data = await scraper.GetWaterLevels("bandon", "dunmanway");
      assert.equal(data.length > 10, true, true);
    });
  });

  describe("#GetWaterLevels", () => {
    it("returns no water levels when called with invalid parameters", async () => {
      var data = await scraper.GetWaterLevels("liffey", "curranure");
      assert.equal(data.length, 0, true);
    });
  });
});
