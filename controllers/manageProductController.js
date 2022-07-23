
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

    // Database connection
    const { Pool } = require('pg');
    const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
    const pool = new Pool({connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false
    }
    }); 

    let sql = `INSERT INTO necklaces (description, length, price) VALUES (${necklaceDetails.description}, ${necklaceDetails.length}, ${necklaceDetails.price})`;
    pool.query(sql, function(err, db_result){
        if(err){
            throw err;
        } else {
            console.log("1 necklace inserted");
            //console.log(db_result);
            //const results = { 'results': (db_result) ? db_result.rows : null};  
            
            //callback(null, results); //Use controller to display result of inserted necklace to user
        }
    });

    //necklaces_model.model_insertNecklace(necklaceDetails.description, necklaceDetails.price, necklaceDetails.length);
        
    res.write('Success');

    //console.log(description, price, length);
    
    
}

module.exports = {
    control_insertNecklace: control_insertNecklace
}

