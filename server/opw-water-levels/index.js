const scraper = require('./scraper');
const { RiverLevel } = require('../models');
const { RiverLocation } = require('../models');
const { SaveRiverLevels } = require('./db');

async function StoreMissingWaterLevels(river, location) {

    console.log('******************************');
    console.log('StoreMissingWaterLevels');
    console.log('******************************');
    // get latest data from OPW 
    var latestReadings = await scraper.GetWaterLevels(river, location);

    //look up river locationID
    var location = await RiverLocation.findOne({
        where: {
            name: river,
            location: location
        }
    });

    //get the latest record from db, need to store everything newer that this 
    var latestSavedRiverLevel = await RiverLevel.findOne({
        where: {
            river: river,
            locationID: location.locationID
        },
        order: [['recordedAt', 'DESC']],
    }
    );

    if (latestSavedRiverLevel == null) {
        return await SaveRiverLevels(latestReadings);
    } else {
        //filter newReadings to remove ones older already stored in db
        var newReadings = latestReadings.filter(function (item) {
            return item.recordedAt > latestSavedRiverLevel.recordedAt;
        });

        return await SaveRiverLevels(newReadings);
    }

};

async function GetLatestWaterLevelReadings() {
}

module.exports.GetLatestWaterLevelReadings = GetLatestWaterLevelReadings;
module.exports.StoreMissingWaterLevels = StoreMissingWaterLevels;
