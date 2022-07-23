
// const necklaces_model = require('../models/necklaces_model');

// 
// function control_displayAllNecklaces(req, res){
//     console.log("Getting all necklaces...");
    
//     necklaces_model.model_getAllNecklaces(function(error, results){
//         res.render('pages/necklaces', results );
//     });
// }


// Insert necklace
function control_insertNecklace(req, res){
    console.log("Inserting necklace...");

    //Get values from user input
    
    
    necklaces_model.model_insertNecklace();
}

module.exports = {
    control_displayAllNecklaces: control_displayAllNecklaces,
    control_insertNecklace: control_insertNecklace
}

