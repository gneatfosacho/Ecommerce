//Order.JS to create Order Schema in the application 

//Including the required packages and assigning it to Local Variables
const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;


//Creating a Order Schema 
const OrderSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  totalPrice: { type: Number, default: 0},
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: { type: Number, default: 1 }
  }]
});


//Using deep-populate to facilitate rating feature
OrderSchema.plugin(deepPopulate);

//Exporting the Order schema to reuse 
module.exports = mongoose.model('Order', OrderSchema);
