const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Album = require('../models/album');
const db = require('../db');
require('dotenv').config();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_MASTER;

//USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    return res.status(201).json({ user, token });
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
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
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

module.exports = {
  getUsers,
  signUp,
  signIn,
  updateUser,
  getAlbums,
  getAlbum,
};
