//Review.JS to create Review Schema in the application 

//Including the required packages and assigning it to Local Variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a Review Schema 
const ReviewSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  rating: { type: Number, default: 0},
  created: { type: Date, default: Date.now }
});


//Exporting the Review schema to reuse
module.exports = mongoose.model('Review', ReviewSchema);
