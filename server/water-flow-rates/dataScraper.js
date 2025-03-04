var path = require('path');
const axios = require('axios').default;
const fs = require('fs');
const pdfParse = require('pdf-parse');
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
    model.river = 'lee';
    model.locationID = 1;
    model.reading = item[1];
    model.recordedAt = DateTime.fromFormat(item[0], 'dd-MMM-yy hh:mm:ss');
    return model;
  });

  return flowReadings;
}

async function parsePdf(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw error;
  }
}

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
  try {
    console.log('Reading PDF file...');
    const dataBuffer = fs.readFileSync(pdfPath);
    console.log('Parsing PDF...');
    const data = await pdfParse(dataBuffer);
    
    console.log('PDF Info:', {
      pages: data.numpages,
      textLength: data.text.length
    });

    // Split text into lines and clean up
    const lines = data.text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    console.log(`Found ${lines.length} lines in PDF`);
    
    // Log first few lines to see what we're working with
    console.log('First 10 lines of PDF:');
    lines.slice(0, 10).forEach((line, i) => {
      console.log(`${i + 1}: ${line}`);
    });

    const readings = [];
    
    // Try different date formats
    const datePatterns = [
      /(\d{2}-\w{3}-\d{2})\s+(\d{2}:\d{2}):(\d{2})(\d+\.?\d*)cubic meters per second/,  // DD-MMM-YY HH:mm:ss with units
      /(\d{2}-\w{3}-\d{2})\s+(\d{2}:\d{2}):(\d{2})(\d+\.?\d*)/,  // DD-MMM-YY HH:mm:ss
      /(\d{2}\/\d{2}\/\d{4})\s+(\d{2}:\d{2})\s+(\d+\.?\d*)/,     // DD/MM/YYYY HH:mm
      /(\d{2}-\d{2}-\d{4})\s+(\d{2}:\d{2})\s+(\d+\.?\d*)/,       // DD-MM-YYYY HH:mm
      /(\d{2}\s+\w+\s+\d{4})\s+(\d{2}:\d{2})\s+(\d+\.?\d*)/      // DD MMM YYYY HH:mm
    ];

    // First, find all the timestamps in the PDF
    const timestampPattern = /(\d{2}-\w{3}-\d{2})\s+(\d{2}:\d{2}):(\d{2})/;
    const timestamps = [];
    
    for (const line of lines) {
      const match = line.match(timestampPattern);
      if (match) {
        timestamps.push({
          date: match[1],
          time: match[2]
        });
      }
    }

    console.log(`Found ${timestamps.length} timestamps in PDF`);

    // Then, find all the flow values
    const valuePattern = /(\d+\.?\d*)cubic meters per second/;
    const values = [];
    
    for (const line of lines) {
      const match = line.match(valuePattern);
      if (match) {
        values.push(parseFloat(match[1]));
      }
    }

    console.log(`Found ${values.length} flow values in PDF`);

    // Match timestamps with values
    for (let i = 0; i < Math.min(timestamps.length, values.length); i++) {
      readings.push({
        date: timestamps[i].date,
        time: timestamps[i].time,
        value: values[i]
      });
      console.log(`Added reading: ${timestamps[i].date} ${timestamps[i].time} ${values[i]}`);
    }
    
    console.log(`\nExtracted ${readings.length} readings from PDF`);
    if (readings.length === 0) {
      console.log('No readings found. PDF content might be in a different format.');
    }
    
    return readings;
  } catch (error) {
    console.error('Error extracting flow data from PDF:', error);
    throw error;
  }
}

async function ConvertToFlowReadings(data) {
  try {
    console.log('Converting flow readings...');
    const flowReadings = data.map(item => {
      const model = new FlowReading();
      model.river = 'lee';
      model.locationID = 1;
      model.reading = item.value;
      
      // Parse the date and time
      const dateTime = DateTime.fromFormat(`${item.date} ${item.time}`, 'dd-MMM-yy HH:mm');
      if (!dateTime.isValid) {
        console.error(`Invalid date: ${item.date} ${item.time}`);
        return null;
      }
      
      model.recordedAt = dateTime;
      console.log(`Converted reading: ${item.date} ${item.time} ${item.value} -> ${dateTime.toISO()}`);
      return model;
    }).filter(reading => reading !== null);

    console.log(`Successfully converted ${flowReadings.length} readings`);
    return flowReadings;
  } catch (error) {
    console.error('Error converting flow readings:', error);
    throw error;
  }
}

module.exports.ConvertToFlowReadings = ConvertToFlowReadings;
module.exports.DownloadLatestPDF = DownloadLatestPDF;
module.exports.ExtractRawFlowDataFromPDF = ExtractRawFlowDataFromPDF;
