
const bracelets_model = require('../models/bracelets_model');
const earrings_model = require('../models/earrings_model');

// Display list of all earrings.
function control_displayAllEarrings(req, res){
    console.log("Contacting database to get all earrings...");
    
    earrings_model.model_getAllEarrings(function(error, results){
        res.render('pages/earrings', results );
    });
}


// GET SINGLE EARRING FROM DATABASE
function control_getEarring (req, res) {

    let id = req.params.id;
 
    console.log("Contacting database to get earring with id " + id);

    //get returned results from DB model
    earrings_model.model_getEarring(id, function(results){
        //respond with returning JSON data
        res.json(results);
    });
};


// ADD EARRING TO DATABASE
function control_postEarring (req, res) {
    //Get data from body of html
    let description = req.body.description;
    let length = req.body.length;
    let price = req.body.price;

    console.log("Adding new earring with details: " + description + " " + length + " " + price);

    earrings_model.model_insertEarring(description, length, price, function(results){
        res.json(results);
    });
};
 
module.exports = {
    control_displayAllEarrings: control_displayAllEarrings,
    control_getEarring: control_getEarring,
    control_postEarring: control_postEarring
}

