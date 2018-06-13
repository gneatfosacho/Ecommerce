//Product.JS to create Product Schema in the application 

//Including the required packages and assigning it to Local Variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const mongooseAlgolia = require('mongoose-algolia');


//Creating a new Product Schema
const ProductSchema = new Schema({
  
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  owner:  { type: Schema.Types.ObjectId, ref: 'User'},
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
  image: String,
  title: String,
  description: String,
  price: Number,
  crated: { type: Date, default: Date.now }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

ProductSchema
  .virtual('averageRating')
  .get(function() {
    var rating = 0;
    if (this.reviews.length == 0) {
      rating = 0;
    } else {
      this.reviews.map((review) => {
        rating += review.rating;
      });
      rating = rating / this.reviews.length;
    }
    return rating;
  });

  //Adding Plug-ins to ProductSchema like Algolia to facilitate searching of products 
ProductSchema.plugin(deepPopulate);   //Facilitate rating of the product 
ProductSchema.plugin(mongooseAlgolia, {
  appId: '0FOEJ0HBMM',
  apiKey: '3de82e9037ed2726d3a11d8b48a27b49',
  indexName: 'Ecommercever1',
  selector: '_id title image reviews description price owner created averageRating',
  populate: {
    path: 'owner reviews',
    select: 'name rating'
  },
  defaults: {
    author: 'uknown'
  },
  mappings: {
    title: function(value) {
      return `${value}`
    }
  },
  debug: true
})
 
//Wrapping product schema to Model and synchronizing Algolia API 
let Model =  mongoose.model('Product', ProductSchema);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
  searchableAttributes: ['title']
});

//Exporting the wrapped Model(Algolia API + ProductSchema)
module.exports = Model