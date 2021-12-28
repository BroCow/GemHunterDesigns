/** Router for views used for displaying product to customer **/

const express = require('express');
const router = express.Router();

// Show Necklaces page
router.get('/necklaces', function(req, res){
    res.send('View available necklaces here...');
});

// Show Bracelets page
router.get('/bracelets', function(req, res){
    res.send('View available bracelets here...');
});

// Show Earrings page
router.get('/earrings', function(req, res){
    res.send('View available earrings here...');
});

module.exports = router;

