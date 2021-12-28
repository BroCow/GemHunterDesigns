/** Router for views used for managing database **/

const express = require('express');
const router = express.Router();

// Manage Necklaces page
router.get('/necklaces', function(req, res){
    res.send('Add, delete, and modify necklaces here...');
});

// Manage Bracelets page
router.get('/bracelets', function(req, res){
    res.send('Add, delete, and modify bracelets here...');
});

// Manage Earrings page
router.get('/earrings', function(req, res){
    res.send('Add, delete, and modify earrings here...');
});

module.exports = router;

