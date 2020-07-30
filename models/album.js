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
    tracks: [
      {
        trackNumber: Number,
        songTitle: String,
        length: String
      }
    ], 
  },
  { timestamps: true }
);
module.exports = mongoose.model('albums', Album);
