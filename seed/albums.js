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
    {
      albumName: 'YHLQMDLG',
      artistName: 'Bad Bunny',
      year: 2020,
      genre: 'Reggaeton',
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
        'https://www.uscannenbergmedia.com/resizer/OozCk3_74oKgXYBlShh8usx4hgE=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-uscannenberg.s3.amazonaws.com/public/OEV26QQPTJEKVHO4HFVZ5BTBWQ.jpeg',
    },
    {
      albumName: 'A Different Age',
      artistName: 'Current Joys',
      year: 2018,
      genre: 'Reggaeton',
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
      albumCover: 'https://f4.bcbits.com/img/a0685679618_10.jpg',
    },
    {
      albumName: 'Cigarettes After Sex',
      artistName: 'Cigarettes After Sex',
      year: 2017,
      genre: 'Reggaeton',
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cigarettes_After_Sex_%28album%29.svg/1920px-Cigarettes_After_Sex_%28album%29.svg.png',
    },
    {
      albumName: 'folklore',
      artistName: 'Taylor Swift',
      year: 2020,
      genre: 'Alternative',
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
        'https://lh3.googleusercontent.com/G7UHPJnA4PGNUQG7okFdfGjXeC6gJsu2waP3ICthhiYEsqe3lGsI_ta0fnwJ5RaehfbCT_zy=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'No Pressure',
      artistName: 'Logic',
      year: 2020,
      genre: 'Hip-Hop',
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
        'https://lh3.googleusercontent.com/BgdeLGl74qhEwHXWbPKhD5rLGgeMC6jeOvwi6b80DL0KssNDVfjhwkkEM03zPT4esQ65D3tEb5g=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'Viva La Vida or Death and All His Friends',
      artistName: 'Coldplay',
      year: 2008,
      genre: 'Alternative',
      tracks: [
        {
          trackNumber: 1,
          songTitle: 'Life in Technicolor',
          length: '2:29',
        },
        {
          trackNumber: 2,
          songTitle: 'Cemeteries of London',
          length: 'Lost!',
        },
      ],
      albumCover:
        'https://lh3.googleusercontent.com/udhEzwsNV3Q2tpfAovjU9kk1pVWHZervx_f664xip-6cNzJv7cAtmHSJWLWkfOhcWCm2b_0uAw=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'The Resistance',
      artistName: 'Muse',
      year: 2009,
      genre: 'Alternative Rock',
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
        'https://lh4.ggpht.com/v9M13PqWZ-tfl-sYDevBIc4hg5-XgfwqNbMnzaJg0E85797GuxgxSDhAK0RYjVlyaG2rl275Bw=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'The Killers',
      artistName: 'Hot Fuss',
      year: 2004,
      genre: 'Rock',
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
        'https://lh3.googleusercontent.com/KoHTjN_qHon5OolATy6GgIwgkygyLjEYi0F0o9u3UgIwcbcur-cXKrVsuiVYiqld8X4oB8giug=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'Laundry Service',
      artistName: 'Shakira',
      year: 2001,
      genre: 'Pop',
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
        'https://lh3.ggpht.com/8f3iII3JFeRnuh-GcORAx91P9x0LRNjG_95lbCosvFVwAoLxaVZ261WCs7sW071WnAdm-UM8RA=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'My Dear Melancholy',
      artistName: 'The Weeknd',
      year: 2018,
      genre: 'R&B',
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
        'https://lh3.googleusercontent.com/MsQUTKl1P4DoRiOGQcr12MgM-KFVmqseb-z-WMJ51DF119_1OaYvHBynEb5kzGiuQn2_8tzJ7g=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'Views',
      artistName: 'Drake',
      year: 2016,
      genre: 'Hip-Hop',
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
        'https://lh3.googleusercontent.com/acO4BHeVRW7Yu4VcVLaiFFRXu5M7ftpqnhjoLdAwHYFtqy1fruz8tW1xk4gjzZHiD-qXYrM2_h4=s1024-c-e100-rwu-v1',
    },
    {
      albumName: '14:59',
      artistName: 'Sugar Ray',
      year: 1999,
      genre: 'Pop',
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
        'https://lh5.ggpht.com/WNH-Kf6IEsx9nyIP-rfUjCik248an-RcMROMieERi4peFKGGkLdxr8XYuo-tCREzMDB23_x6Bqk=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'Astro Lounge',
      artistName: 'Smash Mouth',
      year: 1999,
      genre: 'Alternative',
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
        'https://lh3.googleusercontent.com/6lIEczg-weYa3o3pFZj92JXlHaEMQVyiStqDRmqThseWNC5rFsaXnZklTqa_ozGW4EuKzEEcjwQ=s1024-c-e100-rwu-v1',
    },
    {
      albumName: 'Audioslave',
      artistName: 'Audioslave',
      year: 2002,
      genre: 'Rock',
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
        'https://lh3.googleusercontent.com/smWyGl1oLQE6vSh4UASDLmpYDt7aqTgc0jxbcZGoUIf018KHLeAZyoSp6C-7lQYpBYrrRDzYKy4=s1024-c-e100-rwu-v1',
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
