console.log("JS linked");

const productLinks_array = document.getElementsByClassName('shop_item');

productLinks_array[0].addEventListener('click', function(){
    //location.href = '/product/bracelets';
    console.log("Shop necklaces requested");
})

productLinks_array[1].addEventListener('click', function(){
    location.href = '/product/necklaces';
})

productLinks_array[2].addEventListener('click', function(){
    location.href = '/product/earrings';
})

productLinks_array[3].addEventListener('click', function(){
    location.href = '/product/manageProduct';
})



