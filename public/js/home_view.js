const app = require('index.js');

const productLinks_array = document.getElementsByClassName('home-info_item');

productLinks_array[1].addEventListener('click', function(){
    app.get('/product/necklaces');
})



