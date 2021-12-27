
// const PORT = process.env.PORT || 5000;

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

const btn = document.getElementById('testDb');

function insertNecklace(description, length, price){
    console.log('Button clicked');
    let description = "Test description";
    let length = 18;
    let price = 68;
    let sql = `INSERT INTO necklaces (description, length, price) VALUES (${description}, ${length}, ${price})`;
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}
btn.addEventListener('click', insertNecklace);