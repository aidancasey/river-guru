var path = require('path');
const axios = require('axios').default;
const fs = require('fs');
const pdfTableExtractor = require('pdf-table-extractor');
const ObjectsToCsv = require('objects-to-csv');
const FlowReadingModel = require('../models/flowReading.model');

async function downloadFile(fileUrl, outputLocationPath) {
  const writer = fs.createWriteStream(outputLocationPath);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream'
  }).then((response) =>

  // ensure that the user can call `then()` only when the file has
  // been downloaded entirely.

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
      })
      .catch((err) => {
        console.log(err);
      });
    // var x = await parseData(testPath);
  });
}

module.exports.GetLatestData = GetLatestData;
