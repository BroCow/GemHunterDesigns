
const PORT = process.env.PORT || 5000;

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


const btn = document.getElementById('testDb');

function insertNecklace(description, length, price){
    console.log('Button clicked');
    let description = "Test description";
    let length = 18;
    let price = 68;

    try {
        const client = await pool.connect();
        client.query(`INSERT INTO necklaces (description, length, price) VALUES (${description}, ${length}, ${price})`);
        console.log("Inserted!");
        // const results = { 'results': (result) ? result.rows : null};
        // res.render('pages/db', results );
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }
}
btn.addEventListener('click', insertNecklace);