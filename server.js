const express = require('express');
const waterFlow = require('./water-flow-rate');


const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', function(req, res) {
    waterFlow.Save1();
    res.send('Hello World')
  })
  
