const db = require('../db');
const Album = require('../models/album');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createAlbums = async () => {
  const albums = [
    {
      albumName: 'Hybrid Theory',
      artistName: 'Linkin Park',
      year: 2000,
      genre: 'Alternative Rock',
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Paper Cut',
          length: '3:05',
        },
        {
          trackNumber: 2,
          songTitle: 'One Step Closer',
          length: '2:35',
        },
      ],
      albumCover: 'https://img.discogs.com/WWM3W1bvHKrhIWN0aVi9cJPD4Xg=/fit-in/600x588/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6916676-1429456835-4674.jpeg.jpg'
    },
  ];
  await Album.insertMany(albums);
  console.log('Successfully added an Album');
};
const run = async () => {
  await createAlbums();
  db.close();
};

run();
