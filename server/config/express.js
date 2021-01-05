const express = require('express');
const cors = require('cors');
const routes = require('../routes/index.route');

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
// API router
app.use('/api/', routes);

module.exports = app;
