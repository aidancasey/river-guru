/* eslint-env mocha */
var assert = require('assert');
const { DateTime } = require('luxon');
var scraper = require('../tide-times/scraper.js');
var index = require('../tide-times/index.js');
const { doesNotMatch } = require('assert');

describe('tide-times-scraper', () => {
  describe('#BuildURL()', () => {
    it('should return a valid URL when passed a valid location and date', () => {
      const now = DateTime.fromISO(new Date().toISOString());
      var url = scraper.BuildURL('cork', now);
      assert.equal(url.includes('https://www.tidetimes.co.uk/'), true);
    });
  });
});

describe('tide-times-scraper', () => {
  describe('#GetTideTimes()', () => {
    it('should return at least 2 tides times when passed a valid location and date', () => {
      const now = DateTime.fromISO(new Date().toISOString());
      scraper.GetTideTimes('cork', now).then((data) => {
        console.log(data.length);
        assert.equal(data.length > 2, true, true);
      });
    });
  });
});

describe('tide-times-index', () => {
  describe('#GetTideTimes()', () => {
    it('should return at least 2 tides times when passed a valid location and date', () => {
      const now = DateTime.fromISO(new Date().toISOString());
      index.GetTideTimes('cork', now).then((data) => {
        console.log(data.length);
        assert.equal(data.length > 2, true, true);
      });
    });
  });
});
