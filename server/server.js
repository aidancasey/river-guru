// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
require('./config/mongoose');

const waterFlow = require('./water-flow-rate');

app.listen(config.port, () => {
  console.log('listening on 3000');
});

app.get('/', (req, res) => {
  waterFlow.UpdateData();
  res.send('Hello World');
});
