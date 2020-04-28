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

data.forEach(show => {
  Show.create(
    {
      name: show.name,
      genre: show.genre,
    },
    (err, createdShow) => {
      if (err) return console.log(err)

      show.characters.forEach(character => {
        Character.create(
          {
            name: character.name,
            properties: character.properties,
            shows: [createdShow],
            age: character.age,
            parents: {
              mother: character.parents ? character.parents.mother : null,
              father: character.parents ? character.parents.father : null,
            },
          },
          (err, newCharacter) => {
            if (err) return console.log(err)
          },
        )
      })
    },
  )
})
