const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    firstname: {
      type: String,
      required: false
    },
    lastname: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    password_digest: {
      type: String,
      required: true
    },
    admin_key: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)