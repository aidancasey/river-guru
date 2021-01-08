// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
require('./config/mongoose');

const waterFlow = require('./water-flow-rate');

const filePath = '/Users/aidancasey/code/river-guru/server/downloads/TEST.pdf';
const pdfTableExtractor = require('pdf-table-extractor');
const ObjectsToCsv = require('objects-to-csv');

// PDF parsed
function success(result) {
  var data = result.pageTables[1];

  console.log('i read the file');
  console.log(data.tables);
  const csv = new ObjectsToCsv(data.tables);
  //csv.toDisk('test-data/list.csv');
}

// Error
function error(err) {
  console.log('i didnt read the file');
  console.error(`Error: ${err}`);
}

app.listen(config.port, () => {
  console.log('listening on 3000');
});

app.get('/', (req, res) => {
  waterFlow.UpdateData();
  res.send('Hello World');
});
