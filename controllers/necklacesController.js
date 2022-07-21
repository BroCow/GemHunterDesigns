
const necklaces_model = require('../models/necklaces_model');

// Display list of all necklaces.
function control_displayAllNecklaces(req, res){
    console.log("Getting all necklaces...");
    
    necklaces_model.model_getAllNecklaces(function(error, results){
        res.render('pages/necklaces', results );
    });
}

module.exports = {
    control_displayAllNecklaces: control_displayAllNecklaces
}

