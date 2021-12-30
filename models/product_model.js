/*** Gets stuff from database ***/

const PORT = process.env.PORT || 5000;

const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


function getDbNecklaces(callback){
    var sql = 'SELECT id, description, length, price FROM necklaces';
    pool.query(sql, function(err, db_result){
        if(err){
            throw err;
        } else {
            console.log('Back from db with: ');
            console.log(db_result);

            var result = {necklaces:db_result.rows};
            console.log("Result variable is: " + result);

            callback(null, result);
        }
    });
}


module.exports = {
    getDbNecklaces: getDbNecklaces
}