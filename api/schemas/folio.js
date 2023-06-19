const monogoose = require('mongoose');

const folioSchema = new monogoose.Schema({
  user: {
    type: String,
    required: true,
  },
  queue: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  date: { type: Date, default: Date.now },
  toNumber: { type: String },
  fromNumber: { type: String },
  CallSid: { type: String },
});

const Folio = mongoose.model('User', folioSchema);

module.exports = { Folio };