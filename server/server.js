// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
require('./config/mongoose');

const waterFlow = require('./water-flow-rate');



app.listen(config.port, function() {
    console.log('listening on 3000')
  })

  app.get('/', function(req, res) {
    waterFlow.Save1();
    res.send('Hello World')
  })
  
