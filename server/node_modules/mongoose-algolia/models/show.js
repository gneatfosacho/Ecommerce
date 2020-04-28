'use strict';

const mongoose = require('mongoose');
const algolia = require('./../src/index');
const Schema = mongoose.Schema;

const showSchema = new Schema({
  name: String,
  genre: [String],
  counter: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Show',showSchema);
