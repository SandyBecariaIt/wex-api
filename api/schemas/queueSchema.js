const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueSchema = new mongoose.Schema({
  name: String,
  que_str: [String],
  id: String,
});

const Queue = mongoose.model('User', queueSchema);

module.exports = { Queue };
