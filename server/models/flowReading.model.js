const mongoose = require('mongoose');

const FlowReadingSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  },
 
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
});


module.exports = mongoose.model('FlowReading', FlowReadingSchema);