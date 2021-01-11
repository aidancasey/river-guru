var path = require('path');
const axios = require('axios').default;
const fs = require('fs');
const pdfTableExtractor = require('pdf-table-extractor');
const { DateTime } = require('luxon');
const FlowReadingModel = require('../models/flowReading.model');

async function downloadFile(fileUrl, outputLocationPath) {
  const writer = fs.createWriteStream(outputLocationPath);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream'
  }).then((response) =>

  // ensure that the file has been downloaded entirely.
    new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error = null;
      writer.on('error', (err) => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on('close', () => {
        if (!error) {
          resolve(outputLocationPath);
        }
        // no need to call the reject here, as it will have been called in the
        // 'error' stream;
      });
    }));
}

function transformPDFDataToFlowReadings(readings) {
  var flowReadings = readings.map((item) => {
    var model = new FlowReadingModel();
    model.river = 'Lee';
    model.location = 'Dam';
    model.level = item[1];
    model.DateTime = DateTime.fromFormat(item[0], 'dd-MMM-yy hh:mm:ss');
    return model;
  });

  return flowReadings;
}

// wrap pdfTableExtractor in a promise to make it more composable
const parsePdf = (file) => new Promise((resolve, reject) => {
  pdfTableExtractor(file, (data, err) => {
    if (err) {
      return reject(err);
    }
    resolve(data);
  });
});

async function GetLatestData() {
  var url = 'http://esbhydro.ie/Lee/02-Inniscarra-Headrace.pdf';
  var fullPath = path.resolve('./server/downloads');
  var newName = `${new Date().toISOString()}.pdf`;
  var downloadFileName = `${fullPath}/${newName}`;

  downloadFile(url, downloadFileName).then((value) => {
    parsePdf(downloadFileName)
      .then((data) => {
        console.log(data.pageTables[1].tables);

        // last readings are on page two , starting on  line 3
        var pageTwo = data.pageTables[1];
        var readings = pageTwo.tables;
        readings.splice(0, 2); // drop first 2 duff lines
        console.log('foo');

        var flowReadings = transformPDFDataToFlowReadings(readings);

        return flowReadings;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

module.exports.GetLatestData = GetLatestData;
