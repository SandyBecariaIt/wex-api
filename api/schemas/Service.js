const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new mongoose.Schema({
  name: String,
  queue_str: String,
  maxPriority: Number,
  keyword: String,
  active: { type: Boolean, default: true },
  token: tokenSchema,
});

const service = mongoose.model('Service', serviceSchema);
module.exports = service;
