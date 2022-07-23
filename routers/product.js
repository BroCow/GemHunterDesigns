/** Router for views used for displaying product to customer **/

const express = require('express');
const router = express.Router(); 

const necklacesController = require('../controllers/necklacesController');
const braceletsController = require('../controllers/braceletsController');
const earringsController = require('../controllers/earringsController');
// const manageProductController = require('../controllers/manageProductController');

// Database connection
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});
 
// Contact the controller to process database request
router.get('/necklaces', necklacesController.control_displayAllNecklaces);

// Show Bracelets page
router.get('/bracelets', braceletsController.control_displayAllBracelets);

// Show Earrings page
router.get('/earrings', earringsController.control_displayAllEarrings);

// Show Manage Product page
router.get('/manageProduct', (req, res) => res.render('pages/manageProduct'));

// Handle POST
// router.post('/manageProduct/insertNecklace', (req, res) => res.send('Post received'));
router.get('/manageProduct/insertNecklace', function(req, res, next) {
  // store all the user input data
  const necklaceDetails=req.body;
  console.log(necklaceDetails);
 
  // insert user data into users table
  var sql = 'INSERT INTO users SET ?';
  pool.query(sql, necklaceDetails, function(err, data) {
    if (err) throw err;
    console.log("Necklace inserted");
  });
});

module.exports = router;

