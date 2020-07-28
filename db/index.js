const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/obeliskRecordsDatabase'
//this will determine what the database will be named in mongodb && the ip will always be the same for the mongodb server

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => { //?CONNECTED!
    console.log('Successfully connected to MongoDB')
  })
  .catch(e => { //?UNABLE TO CONNECT!
    console.error('Connection error', e.message)
  })
//What's happening here is that mongoose is establishing promises for the connection.

const db = mongoose.connection

module.exports = db