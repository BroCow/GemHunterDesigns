/** Router for views used for managing database **/

const express = require('express');
const router = express.Router();

// Manage Necklaces page
router.get('/necklaces', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM necklaces');
      const results = { 'results': (result) ? result.rows : null};
      
      res.render('pages/necklaces', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

// Manage Bracelets page
router.get('/bracelets', function(req, res){
    res.send('Add, delete, and modify bracelets here...');
});

// Manage Earrings page
router.get('/earrings', function(req, res){
    res.send('Add, delete, and modify earrings here...');
});

module.exports = router;

