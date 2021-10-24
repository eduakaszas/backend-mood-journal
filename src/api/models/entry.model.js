const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  activities: {
    type: Array,
    default: 0,
  },
  date: {
    type: Number,
    default: 0,
  },
  notes: {
    type: String,
    default: 0,
  },
});

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;
