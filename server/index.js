const filePath = 'test-data/04-Inniscarra-Flow.pdf';

const pdfTableExtractor = require('pdf-table-extractor');

const ObjectsToCsv = require('objects-to-csv');

// PDF parsed
function success(result) {
  var data = result.pageTables[1];

  console.log(data.tables);
  const csv = new ObjectsToCsv(data.tables);
  csv.toDisk('test-data/list.csv');
}

// Error
function error(err) {
  console.error(`Error: ${err}`);
}

pdfTableExtractor(filePath, success, error);
