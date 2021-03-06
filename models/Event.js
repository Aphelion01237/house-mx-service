// models/Event.js

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  urgency: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model('event', EventSchema);