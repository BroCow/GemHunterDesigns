/** Router for views used for displaying product to customer **/

const express = require('express');
const router = express.Router();

const necklacesController = require('../controllers/necklacesController');

// Database connection
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

// Contact the controller to process database request
router.get('/necklaces', necklacesController.control_getAllNecklaces);






// router.get('/necklaces', async (req, res) => {
//     try {
//       const client = await pool.connect();
//       const result = await client.query('SELECT * FROM necklaces');
//       const results = { 'results': (result) ? result.rows : null};
      
//       res.render('pages/necklaces', results );
//       client.release();
//     } catch (err) {
//       console.error(err);
//       res.send("Error " + err);
//     }
//   })







// Show Bracelets page
router.get('/bracelets', function(req, res){
    res.send('View available bracelets here...');
});

// Show Earrings page
router.get('/earrings', function(req, res){
    res.send('View available earrings here...');
});

module.exports = router;

