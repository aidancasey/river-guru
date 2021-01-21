const mongoose = require('mongoose');

const FlowReadingSchema = new mongoose.Schema({
  river: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  recordedAt: {
    type: Date,
    required: true
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('FlowReading', FlowReadingSchema);
