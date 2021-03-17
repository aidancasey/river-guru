
const { DeleteOldWaterLeveLReadings } = require('../opw-water-levels');

module.exports = {
    //remove old dta from database 
    Kaboom(req, res) {
        DeleteOldWaterLeveLReadings()
            .then(res.send('old data nuked'));
    }
}