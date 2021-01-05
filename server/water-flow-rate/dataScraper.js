const flowReadingModel = require('../models/flowReading.model');



 function downloadPDFReport() {
  var path = require("path");
  var fullPath = path.resolve("./server/downloads");
  var url = "http://esbhydro.ie/Lee/02-Inniscarra-Headrace.pdf";
 var newName = new Date().toISOString() + ".pdf";

  

console.log("ful path : " + fullPath);

const { DownloaderHelper } = require('node-downloader-helper');

const download = new DownloaderHelper(url, fullPath,{fileName : newName});
download.on('end', () => console.log('Download Completed'))
download.start();



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

