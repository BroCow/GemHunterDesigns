// Require the express module
const express = require('express');
const app = express();

// const app = require('index.js');
const router = require('routers/product.js');

const productLinks_array = document.getElementsByClassName('home-info_item');

productLinks_array[1].addEventListener('click', function(){
    router.get('/necklaces');
})



