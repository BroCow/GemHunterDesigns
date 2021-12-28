
const res = require('express/lib/response');
const product_model = require('../models/product_model');

function getNecklacesList(){
    console.log('getNecklaces function called');

    console.log('Getting necklaces...');

    product_model.getDbNecklaces(function(error, result){
        res.json(result);
    });
}

// Export functions to index.js
module.exports = {
    getNecklacesList: getNecklacesList
};