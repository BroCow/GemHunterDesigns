console.log('js linked');

const insertNecklace = document.getElementById('insertNecklace');
function appPost_Necklace(){
    console.log('Insert button clicked');
    window.location.href = 'https://fast-bayou-70960.herokuapp.com/insertNecklace';
}
insertNecklace.addEventListener('click', appPost_Necklace);