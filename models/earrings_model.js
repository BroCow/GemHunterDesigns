
// Database connection
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
}); 

 
// Get all earrings from database
function model_getAllEarrings(callback){
    let sql = 'SELECT * FROM earrings';
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

// Get earring from database by ID
function model_getearring(id, callback){
    //get earring from DB that matches that id

    //create a result to use with response
    let results = {id:id, description:"Dangly", length:10, price:30}

    callback(results);
}

// Insert necklace into database
function model_insertEarring(description, length, price, callback){
    //Add new earring to DB with the provided details

    let results = {success:true};

    callback(results);

    // let sql = `INSERT INTO Necklaces (description, length, price) VALUES (${description}, ${length}, ${price})`;
    // pool.query(sql, function(err, db_result){
    //     if(err){
    //         throw err;
    //     } else {
    //         console.log("1 necklace inserted");
    //         console.log(db_result);
    //         //const results = { 'results': (db_result) ? db_result.rows : null};  
            
    //         //callback(null, results); //Use controller to display result of inserted necklace to user
    //     }
    // })
}

module.exports = {
    model_getAllEarrings: model_getAllEarrings,
    model_getearring: model_getearring,
    model_insertEarring: model_insertEarring
};