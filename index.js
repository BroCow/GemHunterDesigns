

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
  app.get('/necklaces', product_controller.getNecklaces);

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


  // .get('/addItems', async (req, res) => {
  //   try {
  //     const client = await pool.connect();
  //     res.render('pages/addItems');
  //     console.log('Connected!');
  //   } catch (err) {
  //     console.error(err);
  //     res.send("Error " + err);
  //   }
  // })




  // Get request to connect to Heroku database
  // .get('/db', async (req, res) => {
  //   try {
  //     const client = await pool.connect();
  //     const result = await client.query('SELECT * FROM test_table');
  //     const results = { 'results': (result) ? result.rows : null};
  //     res.render('pages/db', results );
  //     client.release();
  //   } catch (err) {
  //     console.error(err);
  //     res.send("Error " + err);
  //   }
  // })

  


  
