const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
//Express is applying the above dependancies to data passed through the backend.

app.use('/api', routes);
//The route for checking our data will require /api as the prefix to all routes.

module.exports = app
