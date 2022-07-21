
const necklaces_model = require('../models/necklaces_model');


// Display list of all necklaces.
// function control_getAllNecklaces(req, res){
//     console.log("Getting all necklaces...");
    
//     necklaces_model.model_getAllNecklaces(function(error, results){
//         // res.json(result);
//         res.render('pages/necklaces', results );
//     });
// }

function control_getAllNecklaces(req, res){
    console.log("Getting all necklaces...");
    let req = necklaces_model.model_getAllNecklaces(results);
    // necklaces_model.model_getAllNecklaces(function(error, results){
        // res.json(result);
    res.render('pages/necklaces', req );
}


// function displayNecklaces(req, res){
//     console.log("Displaying necklaces");
//     res.render('pages/necklaces', req);
// }

module.exports = {
    control_getAllNecklaces: control_getAllNecklaces
}

