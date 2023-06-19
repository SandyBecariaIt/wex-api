const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user: String,
  queue: [String],
  id: String,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
