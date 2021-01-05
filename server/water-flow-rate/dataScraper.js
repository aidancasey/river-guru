const flowReadingModel = require('../models/flowReading.model');


function downloadPDFReport() {
  console.log('downloading pdf');
  return;
}

function parseData() {
  console.log('parsing data from pdf');
return;
}

function GetLatestData() {
  downloadPDFReport();
  parseData();

  var model1 = new flowReadingModel();
    model1.river ="Lee";
    model1.location = "Dam";
    model1.level = Math.random();
    model1.recordedAt =  new Date();

  return model1; 
}

module.exports.GetLatestData = GetLatestData;

