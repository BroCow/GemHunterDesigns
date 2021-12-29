
const necklaces_model = require('../models/necklaces_model');


// Display list of all necklaces.
function control_getAllNecklaces(req, res){
    console.log("Getting all necklaces...");
    necklaces_model.model_getAllNecklaces(function(error, result){
        // res.json(result);
        res.render('views/pages/necklaces', result);
    });
}

module.exports = {
    control_getAllNecklaces: control_getAllNecklaces
}

