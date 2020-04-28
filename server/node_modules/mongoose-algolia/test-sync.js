'use strict'

require('dotenv').config()

const data = require('./sample-data.json')

const mongoose = require('mongoose')

/* DB setup */
mongoose.connect(
  'mongodb://localhost:27017/mongoose-algolia',
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    err ? console.error(`${err.name}: ${err.message}`) : console.log('Database connected - √')
  },
)
/* Mongoose setup */
mongoose.Promise = global.Promise

const Show = require('./models/show')
const Character = require('./models/character')

Character.SyncToAlgolia()
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
