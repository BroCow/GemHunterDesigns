console.log('js linked');

const insertNecklaceSubmit = document.getElementById('addNecklace-link');

insertNecklaceSubmit.addEventListener('click', function(){
    location.href = '/manage/insertNecklace';
});



// const insertNecklace = document.getElementById('insertNecklace');
// function appPost_Necklace(){
//     console.log('Insert button clicked');
//     window.location.href = 'https://fast-bayou-70960.herokuapp.com/insertNecklace';
// }
// insertNecklace.addEventListener('click', appPost_Necklace);

// function insertData(description, price, length){
//     // let description = document.getElementById('description').value;
//     // let price = document.getElementById('price').value;
//     // let length = document.getElementById('length').value;

//     // let insertDataArray = ["description", "price", "length"];
//     let insertDataArray = [description, length, price];

//     return insertDataArray;
// }


// module.exports = {
//     insertData: insertData
// }