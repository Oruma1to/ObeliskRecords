const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password_digest: {
      type: String,
      required: true,
    },
    admin_key: {
      type: Boolean,
      default: false,
      required: false,
    },
    fullName: {
      type: String,
      required: false,
    },
    address1: {
      type: String,
      required: false,
    },
    address2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    zipcode: {
      type: Number,
      required: false,
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`,
      },
      required: [false, 'User phone number required'],
    },
    cart: {
      type: Array,
      require: false,
      default: []     
    }
  },
  { timestamps: true }
);

User.plugin(uniqueValidator);

module.exports = mongoose.model('users', User);
