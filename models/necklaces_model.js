
// Database connection
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
}); 


// Get all necklaces from database
function model_getAllNecklaces(callback){
    let sql = 'SELECT * FROM necklaces';
    pool.query(sql, function(err, db_result){
        if(err){
            throw err;
        } else {
            console.log("Back from database with: ");
            console.log(db_result);
            const results = { 'results': (db_result) ? db_result.rows : null};  
            
            callback(null, results);
        }
    })
}

// Insert necklace into database
function model_insertNecklace(description, length, price, image){
    let sql = `INSERT INTO Necklaces (description, length, price, image) VALUES (${description}, ${length}, ${price}, '${image}')`;
    pool.query(sql, function(err, db_result){
        if(err){
            throw err;
        } else {
            console.log("1 necklace inserted");
            console.log(db_result);
            //const results = { 'results': (db_result) ? db_result.rows : null};  
            
            //callback(null, results); //Use controller to display result of inserted necklace to user
        }
    })
}





module.exports = {
    model_getAllNecklaces: model_getAllNecklaces,
    model_insertNecklace: model_insertNecklace
};