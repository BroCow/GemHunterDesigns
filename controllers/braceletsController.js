
const bracelets_model = require('../models/bracelets_model');

// Display list of all bracelets.
function control_displayAllBracelets(req, res){
    console.log("Contacting database to get all bracelets...");
    
    bracelets_model.model_getAllBracelets(function(error, results){
        res.render('pages/bracelets', results );
    });
}
 
// GET SINGLE BRACELET FROM DATABASE
function control_getBracelet (req, res) {

    let id = req.params.id;
 
    console.log("Contacting database to get bracelet with id " + id);

    //get returned results from DB model
    bracelets_model.model_getBracelet(id, function(results){
        //respond with returning JSON data
        res.json(results);
    });
};


// ADD BRACELET TO DATABASE
function control_postBracelet (req, res) {
    //Get data from body of html
    let description = req.body.description;
    let length = req.body.length;
    let price = req.body.price;

    console.log("Adding new bracelet with details: " + description + " " + length + " " + price);

    bracelets_model.model_insertBracelet(description, length, price, function(results){
        res.json(results);
    });
};
module.exports = {
    control_displayAllBracelets: control_displayAllBracelets,
    control_getBracelet,
    control_postBracelet
}

