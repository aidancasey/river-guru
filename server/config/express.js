const express = require('express');
const cors = require('cors');

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

module.exports = app;
