console.log('js linked');

const express = require('express');

const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


// const insertNecklace = document.getElementById('insertNecklace');
function appPost_Necklace(){
    try {
        const client = pool.connect();
  
        // let insertData = addItems_controller.insertData();
        // let desc = insertData[0];
        // let length = insertData[1];
        // let price = insertData[2];
  
        // const result = client.query(`INSERT INTO necklaces (description, length, price) VALUES (${desc}, ${length}, ${price})`);
        const result = client.query("INSERT INTO necklaces (description, length, price) VALUES ('test description', 18, 50");
        // const results = { 'results': (result) ? result.rows : null};
        // console.log('Insert log');
        // const response = 'Insert completed';
        res.render('pages/itemAdded');
        client.release();
      } catch (err) {
        console.error(err);
        res.send("Error " + err);
      }






    // let description = document.getElementById('description').value;
    // let price = document.getElementById('price').value;
    // let length = document.getElementById('length').value;

    // insertData(description, price, length);

    // console.log('Insert button clicked');
    // window.location.href = 'https://fast-bayou-70960.herokuapp.com/insertNecklace';
}
// insertNecklace.addEventListener('click', appPost_Necklace);

function insertData(description, price, length){
    // let description = document.getElementById('description').value;
    // let price = document.getElementById('price').value;
    // let length = document.getElementById('length').value;

    // let insertDataArray = ["description", "price", "length"];
    let insertDataArray = [description, length, price];

    return insertDataArray;
}


module.exports = {
    insertData: insertData
}