/* eslint-env mocha */
var assert = require('assert');
var scraper = require('../opw-water-levels/scraper.js');


describe('opw-water-level-scraper', () => {
describe('#GetWaterLevels', () => {
  it('returns water levels when called with valid parameters',async () => {
     var data = await scraper.GetWaterLevels('a', 'b')
   assert.equal(data.length > 10, true, true);
   
  })
})
});

