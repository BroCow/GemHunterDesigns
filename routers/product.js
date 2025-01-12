/** Router for views used for displaying product to customer **/

const express = require('express');
const router = express.Router(); 

const necklacesController = require('../controllers/necklacesController');
const braceletsController = require('../controllers/braceletsController');
const earringsController = require('../controllers/earringsController');
const manageProductController = require('../controllers/manageProductController');

// Database connection
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});
 
router.get('/huntGems', function(req, res){
  res.render('pages/huntGems');
});

/*** NECKLACES ROUTES ***/
router.get('/necklaces', necklacesController.control_getAllNecklaces);
//router.get('/necklace', necklacesController.control_getNecklace);
// For management page
//router.post('/necklace', necklacesController.control_postNecklace);

/*** BRACELETS ROUTES ***/
router.get('/bracelets', braceletsController.control_displayAllBracelets);
router.get('/bracelet', braceletsController.control_getBracelet);
// For management page
router.post('/bracelet', braceletsController.control_postBracelet);

/*** EARRINGS ROUTES ***/
router.get('/earrings', earringsController.control_displayAllEarrings);
router.get('/earring', earringsController.control_getEarring);
// For management page
router.post('/earrings', earringsController.control_postEarring);



// Show Manage Product page
router.get('/manageProduct', (req, res) => res.render('pages/manageProduct'));



// Handle POST
// router.post('/manageProduct/insertNecklace', (req, res) => res.send('Post received'));
router.get('/manageProduct/insertNecklace', manageProductController.control_insertNecklace);

module.exports = router;

