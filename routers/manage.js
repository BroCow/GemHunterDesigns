/** Router for views used for managing database **/

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

// Manage Necklaces page
router.get('/insertNecklace', function(req, res, next) {
  const necklaceDetails = req.body;
  let sql = 'INSERT INTO users SET ?';
  pool.query(sql, necklaceDetails, function (err, data) {
    if(err) throw err;
    console.log("Necklace added  successfully");
  });
})









module.exports = router;

