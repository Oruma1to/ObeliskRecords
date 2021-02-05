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
      price: 10.99,
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
      ], albumCover: 'https://i.imgur.com/y0iTcyW.jpg'
    },
    {
      albumName: 'YHLQMDLG',
      artistName: 'Bad Bunny',
      year: 2020,
      genre: 'Reggaeton',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Si veo a tu Mamรก',
          length: '2:50',
        },
        {
          trackNumber: 2,
          songTitle: 'La Dificil',
          length: '2:43',
        },
      ],
      albumCover:
        'https://i.imgur.com/qATRmBL.png',
    },
    {
      albumName: 'A Different Age',
      artistName: 'Current Joys',
      year: 2018,
      genre: 'Reggaeton',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Become The Warm Jets',
          length: '5:34',
        },
        {
          trackNumber: 2,
          songTitle: 'Fear',
          length: '3:36',
        },
      ],
      albumCover: 'https://i.imgur.com/8maI1Us.png',
    },
    {
      albumName: 'Cigarettes After Sex',
      artistName: 'Cigarettes After Sex',
      year: 2017,
      genre: 'Reggaeton',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'K.',
          length: '5:19',
        },
        {
          trackNumber: 2,
          songTitle: 'Each Time You Fall in Love',
          length: '4:50',
        },
      ],
      albumCover:
        'https://i.imgur.com/t9mc8NO.png',
    },
    {
      albumName: 'folklore',
      artistName: 'Taylor Swift',
      year: 2020,
      genre: 'Alternative',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'the 1',
          length: '3:30',
        },
        {
          trackNumber: 2,
          songTitle: 'Cardigan',
          length: '3:59',
        },
      ],
      albumCover:
        'https://i.imgur.com/i89LuEs.png',
    },
    {
      albumName: 'No Pressure',
      artistName: 'Logic',
      year: 2020,
      genre: 'Hip-Hop',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'No Pressure Intro',
          length: '2:54',
        },
        {
          trackNumber: 2,
          songTitle: 'Hit My Line',
          length: '4:25',
        },
      ],
      albumCover:
        'https://i.imgur.com/kv7rj4B.png',
    },
    {
      albumName: 'Viva La Vida or Death and All His Friends',
      artistName: 'Coldplay',
      year: 2008,
      genre: 'Alternative',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Life in Technicolor',
          length: '2:29',
        },
        {
          trackNumber: 2,
          songTitle: 'Cemeteries of London',
          length: '5:50',
        },
      ],
      albumCover:
        'https://i.imgur.com/W77vO1O.png',
    },
    {
      albumName: 'The Resistance',
      artistName: 'Muse',
      year: 2009,
      genre: 'Alternative Rock',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Uprising',
          length: '5:05',
        },
        {
          trackNumber: 2,
          songTitle: 'Resistance',
          length: '5:47',
        },
      ],
      albumCover:
        'https://i.imgur.com/ME7gOH9.png',
    },
    {
      albumName: 'The Killers',
      artistName: 'Hot Fuss',
      year: 2004,
      genre: 'Rock',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Jenny Was A Friend Of Mine',
          length: '4:04',
        },
        {
          trackNumber: 2,
          songTitle: 'Mr. Brightside',
          length: '3:43',
        },
      ],
      albumCover:
        'https://i.imgur.com/rdxbTWu.png',
    },
    {
      albumName: 'Laundry Service',
      artistName: 'Shakira',
      year: 2001,
      genre: 'Pop',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Objection(Tango)',
          length: '3:42',
        },
        {
          trackNumber: 2,
          songTitle: 'Underneath Your Clothes',
          length: '3:44',
        },
      ],
      albumCover:
        'https://i.imgur.com/BA5D3xc.png',
    },
    {
      albumName: 'My Dear Melancholy',
      artistName: 'The Weeknd',
      year: 2018,
      genre: 'R&B',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Call Out My Name',
          length: '3:48',
        },
        {
          trackNumber: 2,
          songTitle: 'Try Me',
          length: '3:41',
        },
      ],
      albumCover:
        'https://i.imgur.com/KZCV2Xn.png',
    },
    {
      albumName: 'Views',
      artistName: 'Drake',
      year: 2016,
      genre: 'Hip-Hop',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Keep The Family Close',
          length: '5:28',
        },
        {
          trackNumber: 2,
          songTitle: '9',
          length: '4:15',
        },
      ],
      albumCover:
        'https://i.imgur.com/hCvsyYL.png',
    },
    {
      albumName: '14:59',
      artistName: 'Sugar Ray',
      year: 1999,
      genre: 'Pop',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'New Direction[Intro]',
          length: '0:47',
        },
        {
          trackNumber: 2,
          songTitle: 'Every Morning',
          length: '3:39',
        },
      ],
      albumCover:
        'https://i.imgur.com/mCSOu8f.png',
    },
    {
      albumName: 'Astro Lounge',
      artistName: 'Smash Mouth',
      year: 1999,
      genre: 'Alternative',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Whos There',
          length: '3:34',
        },
        {
          trackNumber: 2,
          songTitle: 'Diggin Your Scene',
          length: '3:09',
        },
      ],
      albumCover:
        'https://i.imgur.com/brdqxPm.png',
    },
    {
      albumName: 'Audioslave',
      artistName: 'Audioslave',
      year: 2002,
      genre: 'Rock',
      price: 10.99,
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Cochise',
          length: '3:42',
        },
        {
          trackNumber: 2,
          songTitle: 'Show Me How To Live',
          length: '4:38',
        },
      ],
      albumCover:
        'https://i.imgur.com/udEytzl.png',
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
