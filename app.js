const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const path = require('path');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(corsOptions));

console.log('in a runnig');
// Require our routes into the application.
require('./server/routes')(app);

app.use('/', serveStatic(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')));

module.exports = app;
