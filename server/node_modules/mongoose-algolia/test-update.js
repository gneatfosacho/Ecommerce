'use strict'

require('dotenv').config()

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

Show.find().exec((err, shows) => {
  if (err) return console.log(err)

  shows.forEach(show => {
    show.counter++
    show.save()
  })
})

Character.find().exec((err, chars) => {
  if (err) return console.log(err)

  chars.forEach(char => {
    char.counter++
    char.save()
  })
})
