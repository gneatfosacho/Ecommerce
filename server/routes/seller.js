// Seller.JS file to maintain every sellers details and storing the resources on AWS 

//Including the required packages and assigning it to Local Variables
const router = require('express').Router();
const Product = require('../models/product');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3({ accessKeyId: "enter accessKeyId", secretAccessKey: "enter secretAccessKey" });

const faker = require('faker');

const checkJWT = require('../middlewares/check-jwt');

//function to upload resources to AWS using multer service 
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'ecommercewebapplication',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});


//Function to handle the product's GET and POST requests by seller 
router.route('/products')
  .get(checkJWT, (req, res, next) => {
    Product.find({ owner: req.decoded.user._id })
      .populate('owner')
      .populate('category')
      .exec((err, products) => {
        if (products) {
          res.json({
            success: true,
            message: "Products",
            products: products
          });
        }
      });
  })
  .post([checkJWT, upload.single('product_picture')], (req, res, next) => {
    console.log(upload);
    console.log(req.file);
    let product = new Product();
    product.owner = req.decoded.user._id;
    product.category = req.body.categoryId;
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    product.image = req.file.location;
    product.save();
    res.json({
      success: true,
      message: 'Successfully Added the product'
    });
  });

/* Just for testing if products are added*/
router.get('/faker/test',(req, res, next) => {
  for (i = 0; i < 15; i++) {
    let product = new Product();
    product.category = "5acc1902580ba509c6622bd7";
    product.owner = "5acbfed6571913c9a9e98135";
    product.image = faker.image.cats();
    product.title = faker.commerce.productName();
    product.description = faker.lorem.words();
    product.price = faker.commerce.price();
    product.save();
  }

  res.json({
    message: "Successfully added 20 pictures"
  });

});


//Exporting the module 
module.exports = router;
