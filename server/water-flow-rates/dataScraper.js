var path = require('path');
const axios = require('axios').default;
const fs = require('fs');
const pdfTableExtractor = require('pdf-table-extractor');
const { DateTime } = require('luxon');
const { FlowReading } = require('../models');

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
    var model = new FlowReading();
    model.river = 'Lee';
    model.locationID = 1;
    model.reading = item[1];
    model.recordedAt = DateTime.fromFormat(item[0], 'dd-MMM-yy hh:mm:ss');
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

async function DownloadLatestPDF() {
  var url = 'http://esbhydro.ie/Lee/04-Inniscarra-Flow.pdf';
  var fullPath = path.resolve('./tmp/');

  var temp_dir = path.join(process.cwd(), 'tmp/');
if (!fs.existsSync(temp_dir))
{
    fs.mkdirSync(temp_dir);
}
  var newName = `${new Date().toISOString()}.pdf`;
  var downloadFileName = `${fullPath}/${newName}`;
  return await downloadFile(url, downloadFileName);
}

async function ExtractRawFlowDataFromPDF(pdfPath) {
  return parsePdf(pdfPath);
}

async function ConvertToFlowReadings(data) {
  return new Promise((resolve, reject) => {
    console.log(data.pageTables[1].tables);

    // last readings are on page two , starting on  line 3
    var pageTwo = data.pageTables[1];
    var readings = pageTwo.tables;
    readings.splice(0, 2); // drop first 2 duff line
    console.log('gonna transfrm');
    var flowReadings = transformPDFDataToFlowReadings(readings);
    console.log('transformed');
    resolve(flowReadings);
  });
}

module.exports.ConvertToFlowReadings = ConvertToFlowReadings;
module.exports.DownloadLatestPDF = DownloadLatestPDF;
module.exports.ExtractRawFlowDataFromPDF = ExtractRawFlowDataFromPDF;
