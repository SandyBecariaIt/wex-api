const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
  name: String,
  queue_str: String,
  maxPriority: Number,
  keyword: String,
  active: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
  idServicio: String,
});

module.exports = mongoose.model('Queue', queueSchema);
