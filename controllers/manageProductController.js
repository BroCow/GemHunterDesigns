
//const necklaces_model = require('../models/necklaces_model');


// Insert necklace
function control_insertNecklace(req, res){
    console.log("Inserting necklace...");

    //Get values from url
    const description = req.query.description;
    const price = req.query.price;
    const length = req.query.length;

    let necklaceDetails = {
        description: description,
        price: price, 
        length: length
    };

    necklaces_model.model_insertNecklace(necklaceDetails.description, necklaceDetails.price, necklaceDetails.length);
        
    res.end("Success");

    //console.log(description, price, length);
    
    
}

module.exports = {
    control_insertNecklace: control_insertNecklace
}

