/* const filePath = '/server/downloads/TEST.pdf';

const pdfTableExtractor = require('pdf-table-extractor');

const ObjectsToCsv = require('objects-to-csv');

// PDF parsed
function success(result) {
  var data = result.pageTables[1];

  console.log('i read the file');
  console.log(data.tables);
  const csv = new ObjectsToCsv(data.tables);
  csv.toDisk('test-data/list.csv');
}

// Error
function error(err) {
  console.log('i didnt read the file');
  console.error(`Error: ${err}`);
}

console.log('start up');
pdfTableExtractor(filePath, success, error);
 */
