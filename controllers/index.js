const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Album = require('../models/album');
const db = require('../db');
const { findById } = require('../models/user');
require('dotenv').config();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_MASTER;

// Helper functions
// given a req, determine the user_ID from the token. this lets us know which user based on their token has tried to access a route
const userOfRequest = req => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const legit = jwt.verify(token, TOKEN_KEY);

    if (legit) {
      return legit;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//Authentication
const signUp = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, admin_key } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await new User({
      username,
      email,
      password_digest,
      admin_key,
    });
    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      admin_key: user.admin_key,
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    return res.status(201).json({ user: payload, token });
  } catch (error) {
    console.log('Error in signUp');
    return res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        admin_key: user.admin_key,
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user: payload, token });
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//User
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  const token = req.headers.authorization.split(' ')[1];
  const data = jwt.verify(token, TOKEN_KEY);
  const tokenUserId = data.id;

  if (tokenUserId === id) {
    res.json(user);
  } else {
    res.status(403).send('Unauthorized');
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  const data = jwt.verify(token, TOKEN_KEY);
  const tokenUserId = data.id;

  if (tokenUserId === id) {
    await User.findByIdAndUpdate(id, req.body, { new: true }, (error, user) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!user) {
        return res.status(404).json({ message: 'User is not found!' });
      }
      res.status(200).json(user);
    });
  } else {
    res.status(403).send('Unauthorized');
  }
};

//verify user
const verifyUser = async (req, res) => {
  try {
    const legit = await userOfRequest(req);

    if (legit) return res.status(200).json({ user: legit });
    return res.status(401).send('Not Authorized');
  } catch (error) {
    res.status(500).send('Verify User - Server Error');
  }
};

//get Cart
const getCart = async (req, res) => {
  try {
    const legit = await userOfRequest(req);

    if (!legit) return res.status(401).json('Not Authorized');
    const user = await User.findById(legit.id);
    return res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).send('Verify User - Server Error');
  }
};

//post Cart
const updateCart = async (req, res) => {
  try {
    const legit = await userOfRequest(req);

    if (!legit) return res.status(401).json('Not Authorized');

    await User.findByIdAndUpdate(legit.id, { cart: req.body }, { new: true }, (error, user) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.status(200).json(user.cart);
    });
  } catch (error) {
    res.status(500).send('Verify User - Server Error');
  }
};

//Albums
const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const album = await Album.findById(id);
    res.json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAlbum = async (req, res) => {
  try {
    // needs to be an admin level user
    // user.admin_key needs to be true
    const { id } = await userOfRequest(req);

    // find user using id to access admin
    const user = await User.findById(id);

    if (!user.admin_key) {
      return res.status(401).send('Not Authorized');
    }

    const album = await new Album(req.body);
    await album.save();

    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editAlbum = async (req, res) => {
  try {
    // needs to be an admin level user
    // user.admin_key needs to be true
    const { id } = await userOfRequest(req);

    // find user using id to access admin
    const user = await User.findById(id);

    if (!user.admin_key) {
      return res.status(401).send('Not Authorized');
    }

    await Album.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, album) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!album) {
        return res.status(404).json({ message: 'Album not found!' });
      }
      res.status(200).json(album);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAlbum = async (req, res) => {
  try {
    // needs to be an admin level user
    // user.admin_key needs to be true
    const { id } = await userOfRequest(req);

    // find user using id to access admin
    const user = await User.findById(id);

    if (!user.admin_key) {
      return res.status(401).send('Not Authorized');
    }

    const deleted = await Album.findByIdAndDelete(req.params.id);

    if (deleted) {
      return res.status(200).send('Album deleted!');
    }
    throw new Error('Album not found!');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function searchBar(req, res) {
  try {
    // the search terms string is stored on /search/:terms
    // same with subcategory
    const searchTerms = req.params.terms;

    // multiple search terms are separated by spaces
    // we want to search multiple fields (commented above)
    const relevantFields = ['albumName', 'artistName', 'genre'];

    // for each field we check if there are matches
    // then add them to an array
    let foundMatches = [];

    for (let field of relevantFields) {
      // we use '$regex' with the option 'i' to make it
      // case insensitive
      // we also use | in the search term to mean OR
      const pattern = searchTerms;

      const findArg = {
        [field]: { $regex: pattern, $options: 'i' },
      };

      const matchedAlbums = await Album.find(findArg);
      // filter out repeated products (same id)
      // make a hash table of seen ids in O(n) time and check against it in O(m) time (n and m are the lengths of the 2 arrays)
      let seenIDs = {};

      for (let album of foundMatches) {
        seenIDs[album['_id']] = true;
      }

      for (let mAlbum of matchedAlbums) {
        if (!seenIDs[mAlbum['_id']]) {
          seenIDs[mAlbum['_id']] = true;
          foundMatches.push(mAlbum);
        }
      }
    }
    res.json(foundMatches);
  } catch (error) {
    console.log(error);
  }
}

// module export
module.exports = {
  signUp,
  signIn,
  verifyUser,
  getUsers,
  getUser,
  updateUser,
  getAlbums,
  getAlbum,
  createAlbum,
  editAlbum,
  deleteAlbum,
  searchBar,
  getCart,
  updateCart,
};
