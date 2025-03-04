const db = require('../models');

async function SaveRiverLevels(data) {
  if (!data || data.length === 0) {
    console.log('No river level data to save');
    return;
  }

  const savePromises = data.map(async (element) => {
    try {
      const foundItem = await db.RiverLevel.findOne({
        where: {
          river: element.river,
          locationID: element.locationID,
          recordedAt: element.recordedAt
        }
      });

      if (!foundItem) {
        await element.save();
        console.log(`Saved new water level reading for ${element.river} at ${element.recordedAt}`);
      } else {
        console.log(`Water level reading already exists for ${element.river} at ${element.recordedAt} - skipping`);
      }
    } catch (err) {
      console.error(`Error saving water level reading for ${element.river}:`, err);
    }
  });

  try {
    await Promise.all(savePromises);
    console.log('Finished saving all water level readings');
  } catch (err) {
    console.error('Error saving water level readings:', err);
    throw err;
  }
}

module.exports.SaveRiverLevels = SaveRiverLevels;
