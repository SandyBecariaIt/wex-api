const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    user: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    passwordValidate: Date,
    attemptLogin: { type: Number, default: 0 },

    profile: {
      class: String,
      name: String,
      picture: String,
      tz: { type: String, default: 'America/Mexico_City' },
    },
    status: { type: Number, default: 1 },
    capability: [{ type: String, default: 'can_attend' }],
    capacity: { type: Number, default: 1 },
    service: { type: Schema.Types.ObjectId, ref: 'Service', default: null },
    queue: [{ type: String }],
    socket: String,
    activity: { type: String, default: 0 },

    associative: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = { User };
