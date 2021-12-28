/** Router for views used for displaying product to customer **/

const express = require('express');
const router = express.Router();

// Show Necklaces page
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

// Show Bracelets page
router.get('/bracelets', function(req, res){
    res.send('View available bracelets here...');
});

// Show Earrings page
router.get('/earrings', function(req, res){
    res.send('View available earrings here...');
});

module.exports = router;

