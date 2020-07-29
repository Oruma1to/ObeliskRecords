const bcrypt = require('bcrypt');
const db = require('../db');
const User = require('../models/user');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const SALT_ROUNDS = 11;

const createUsers = async () => {
  const users = [
    {
      username: 'jay',
      email: 'jay@jay.com',
      password_digest: bcrypt.hashSync('123ga', SALT_ROUNDS),
      admin_key: true,
    },
    {
      username: 'stefon',
      email: 'stefon@jay.com',
      password_digest: bcrypt.hashSync('123ga', SALT_ROUNDS),
      fullName: 'Stefon Hsu',
      address1: '123 fake street',
      city: 'New York',
      state: 'NY',
      zipcode: 10012,
      phoneNumber: '555-123-4567',
    },
  ];
  await User.insertMany(users);
  console.log('Successfully created users!');
};

const run = async () => {
  await createUsers();
  db.close();
};

run();
