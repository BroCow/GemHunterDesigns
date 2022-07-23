
//const necklaces_model = require('../models/necklaces_model');


// Insert necklace
function control_insertNecklace(req, res){
    console.log("Inserting necklace...");

    //Get values from url
    const description = req.query.description;
    const price = req.query.price;
    const length = req.query.length;

    res.send(description, price, length);

    console.log(description, price, length);
    
    // necklaces_model.model_insertNecklace();
}

module.exports = {
    control_insertNecklace: control_insertNecklace
}

