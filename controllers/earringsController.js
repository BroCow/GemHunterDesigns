
const earrings_model = require('../models/earrings_model');

// Display list of all earrings.
function control_displayAllEarrings(req, res){
    console.log("Getting all earrings...");
    
    earrings_model.model_getAllEarrings(function(error, results){
        res.render('pages/earrings', results );
    });
}

module.exports = {
    control_displayAllEarrings: control_displayAllEarrings
}

