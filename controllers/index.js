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

module.exports = {
  getUsers
}