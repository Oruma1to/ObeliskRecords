const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const db = require('../db')
require('dotenv').config()

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_MASTER;

//USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const signUp = async (req, res) => {
  try {
    const { username, email, password, admin_key } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await new User({
      username,
      email,
      password_digest,
      admin_key
    })
    await user.save()

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    return res.status(201).json({ user, token })
  } catch (error) {
    console.log("SignUp Error")
    return res.status(400).json({ error: error.message })
  }
}

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getUsers,
  signUp,
  signIn
}