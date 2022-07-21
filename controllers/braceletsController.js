
const bracelets_model = require('../models/bracelets_model');

// Display list of all bracelets.
function control_displayAllBracelets(req, res){
    console.log("Getting all bracelets...");
    
    bracelets_model.model_getAllBracelets(function(error, results){
        res.render('pages/bracelets', results );
    });
}

module.exports = {
    control_displayAllBracelets: control_displayAllBracelets
}

