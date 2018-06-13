//Product-search.JS file to provide functionality to search for products using ALGOLIA API  

//Including the required packages and assigning it to Local Variables
const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('0FOEJ0HBMM', '3de82e9037ed2726d3a11d8b48a27b49');
const index = client.initIndex('Ecommercever1');


//Function providing product search functionality 
router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});

//Exporting the module 
module.exports = router;

