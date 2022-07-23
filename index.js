
// Require the express module
const express = require('express');
// Creat app with express
const app = express(); // exported as module for use elsewhere

// const { body,validationResult } = require('express-validator');
const path = require('path');
const PORT = process.env.PORT || 3000;

//  Require routers
const product = require('./routers/product');
const manage = require('./routers/manage');


// Database connection
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

// Set express stuff
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use express stuff
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Use router modules
app.use('/product', product);
app.use('/manage', manage);



// Direct to home page
app.get('/', (req, res) => res.render('pages/home'));
// Direct to management page
app.get('/manage', (req, res) => res.render('pages/manageProduct'));



// Get request to connect to Heroku database, select all from necklaces table, render results on /necklaces
// app.get('/necklaces', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM necklaces');
//     const results = { 'results': (result) ? result.rows : null};
    
//     res.render('pages/necklaces', results );
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })

// Make it possible to navigate to addItems page in browser
// app.get('/addItems', (req, res) => res.render('pages/addItems'));

// Called by button on addItems page for necklaces
// app.get('/insertNecklace', async (req, res) => {
//   try {
//     const client = await pool.connect();

//     // const result = await client.query(`INSERT INTO necklaces (description, length, price) VALUES (${desc}, ${length}, ${price})`);
//     const result = await client.query("INSERT INTO necklaces (description, length, price) VALUES ('recover description', 1, 2)");
//     // const results = { 'results': (result) ? result.rows : null};
//     // console.log('Insert log');
//     // const response = 'Insert completed';
//     res.render('pages/itemAdded');
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })
  

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

  
  
// module.exports = app;

  
