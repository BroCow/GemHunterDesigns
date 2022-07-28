console.log("JS linked");

const productLinks_array = document.getElementsByClassName('shop_item');

productLinks_array[0].addEventListener('click', function(){
    //location.href = '/product/bracelets';
    console.log("Shop bracelets requested");
    $.get("/product/bracelets", function(data){
        console.log("Back from server with:");
        console.log(data);
    });
})

productLinks_array[1].addEventListener('click', function(){
    //location.href = '/product/necklaces';
    console.log("Shop necklaces requested");
    $.get("/product/necklaces", function(data){
        console.log("Back from server with:");
        console.log(data);
    });
})

productLinks_array[2].addEventListener('click', function(){
    //location.href = '/product/earrings';
    console.log("Shop earrings requested");
    $.get("/product/earrings", function(data){
        console.log("Back from server with:");
        console.log(data);
    });
})





