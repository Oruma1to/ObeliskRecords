const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Album = new Schema(
  {
    albumName: {
      type: String,
      require: true,
    },
    artistName: {
      type: String,
      require: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    tracks: [
      {
        trackNumber: Number,
        songTitle: String,
        length: String
      }
    ],
    albumCover: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model('albums', Album);
