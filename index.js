

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

//  Require controllers
const product_controller = require('./controllers/product_controller');

const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://ilnhpatpqlcdtw:ff9228630d574a88bbebe01ad05d3d5bfb7810ea7d2bba09668ab7ba6980794a@ec2-50-19-160-40.compute-1.amazonaws.com:5432/d40kt7nl9qi54?ssl=true";
const pool = new Pool({connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

// const pool = new Pool({connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

const app = express();
// express()
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  // app.set("port", (process.env.PORT || 5000));
  // app.listen(app.get("port"), function(){
  //   console.log("Now listening for connections on port: ", app.get("port"));
  // })


  // .get('/', (req, res) => res.render('pages/index'))
  app.get('/', (req, res) => res.render('pages/home'));
  // app.get('/necklaces', product_controller.getNecklacesList);
  
  // Get request to connect to Heroku database, select all from necklaces table, render results on /necklaces
  app.get('/necklaces', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM necklaces');
      const results = { 'results': (result) ? result.rows : null};
     
      res.render('pages/necklaces', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  // Make it possible to navigate to addItems page in browser
  app.get('/addItems', (req, res) => res.render('pages/addItems'));
  // Called by button on addItems page for necklaces
  app.get('/insertNecklace', async (req, res) => {
    try {
      const client = await pool.connect();
      // let id = 2;
      // let desc = 'second description';
      // let length = 18;
      // let price = 50;
      const result = await client.query("INSERT INTO necklaces VALUES (2, 'second description', 18, 50)");
      // const result = await client.query("INSERT INTO necklaces VALUES (2, 'second description', 18, 50");
      // const results = { 'results': (result) ? result.rows : null};
      // console.log('Insert log');
      // const response = 'Insert completed';
      res.render('pages/itemAdded');
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
    

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));



  /*** Template DB Connection ***/
  // Get request to connect to Heroku database
  // app.get('/db', async (req, res) => {
  //   try {
  //     const client = await pool.connect();
  //     const result = await client.query('SELECT * FROM necklaces');
  //     const results = { 'results': (result) ? result.rows : null};
  //     res.render('pages/db', results );
  //     client.release();
  //   } catch (err) {
  //     console.error(err);
  //     res.send("Error " + err);
  //   }
  // })
  
  


  
