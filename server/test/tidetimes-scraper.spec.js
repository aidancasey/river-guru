
var assert = require('assert');
var scraper = require('../tide-times/scraper.js')
const { DateTime } = require('luxon');

describe('tide-times-scraper', function() {
  describe('#BuildURL()', function() {
    it('should return a valid URL when passed a valid location and date', function() {
      const now = DateTime.fromISO(new Date().toISOString())
      var url = scraper.BuildURL('cork',now);
      assert.equal(url.includes('https://www.tidetimes.co.uk/'),true);
    }
      );
    });
  });

  describe('tide-times-scraper', function() {
    describe('#GetTideTimes()', function() {
      it('should return at least 2 tides times when passed a valid location and date', function() {
        const now = DateTime.fromISO(new Date().toISOString())
        var data = scraper.GetTideTimes('cork',now);
        console.log(data);
        assert.equal(url,"dookes",true);
      }
        );
      });
    });

