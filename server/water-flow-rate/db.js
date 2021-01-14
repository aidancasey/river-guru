const { db } = require('../models/flowReading.model');

async function SaveFlowReadings(data) {
  return new Promise((resolve, reject) => {
    console.log('gonna save');
    console.log(JSON.stringify(data));
    console.log('tis done ');
    resolve('tis done');
  });
}

module.exports.SaveFlowReadings = SaveFlowReadings;
