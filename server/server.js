// config should be imported before importing any other file
const { DateTime } = require('luxon');
const config = require('./config/config');
const app = require('./config/express');

require('./config/mongoose');

const waterFlow = require('./water-flow-rate');


app.listen(config.port, () => {
  console.log('listening on 3000');
  var testDate = '09-Jan-21 05:00:00';
  var d = DateTime.fromFormat(testDate, 'dd-MMM-yy hh:mm:ss');
  console.log(d.toRFC2822());
});

app.get('/', (req, res) => {
  waterFlow.UpdateData();
  res.send('Hello World');
});
