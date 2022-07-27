
const necklaces_model = require('../models/necklaces_model');

// Display list of all necklaces.
function control_getAllNecklaces(req, res){
    console.log("Contacting database to get all necklaces...");
    
    necklaces_model.model_getAllNecklaces(function(error, results){
        res.render('pages/huntGems', results );
    });
}

// GET SINGLE NECKLACE FROM DATABASE
function control_getNecklace (req, res) {

    let id = req.params.id;
 
    console.log("Contacting database to get necklace with id " + id);

    //get returned results from DB model
    necklaces_model.model_getNecklace(id, function(results){
        //respond with returning JSON data
        res.json(results);
    });
};


// ADD NECKLACE TO DATABASE
function control_postNecklace (req, res) {
    //Get data from body of html
    let description = req.body.description;
    let length = req.body.length;
    let price = req.body.price;

    console.log("Adding new necklace with details: " + description + " " + length + " " + price);

    necklaces_model.model_insertNecklace(description, length, price, function(results){
        res.json(results);
    });
};



module.exports = {
    control_getAllNecklaces: control_getAllNecklaces,
    control_getNecklace: control_getNecklace,
    control_postNecklace: control_postNecklace
}

