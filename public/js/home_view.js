

const productLinks_array = document.getElementsByClassName('home-info_item');

// const braceletsLink = document.getElementById("bracelets-link");
// const necklacesLink = document.getElementById("necklaces-link");
// const earringsLink = document.getElementById("earrings-link");

// const productPaths_array = [braceletsLink, necklacesLink, earringsLink]

// for(i = 0, i < productLinks_array.length; i++;){
//     productLinks_array[i].addEventListener('click', function(){
//         console.log(productPaths_array[i]);
//         location.href = `/product/${productPaths_array[i]}`;
//     })
// }

productLinks_array[0].addEventListener('click', function(){
    location.href = '/product/bracelets';
})

productLinks_array[1].addEventListener('click', function(){
    location.href = '/product/necklaces';
})

productLinks_array[2].addEventListener('click', function(){
    location.href = '/product/earrings';
})



