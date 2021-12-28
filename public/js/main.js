console.log('js linked');

// Get item links from home page info section by classname to create array
const homeInfoItems = document.getElementsByClassName('home-info_item');
console.log(homeInfoItems);


function appGet_Necklaces(){
    console.log("Calling app.get('/necklaces') from index");
    window.location.href = 'https://fast-bayou-70960.herokuapp.com/necklaces';
    

    // let necklaces = necklaceLink.innerHTML;
    // console.log('Necklaces: ' + necklaces);
    // $.get('/pages/necklaces', function(data){
    //     console.log('Back from server with: ');
    //     console.log(data);

        // $('#allNecklaces').append('<h3>Necklaces Currently Available</h3>');
        // for(let i=0; i<data.necklaces.length; i++){
        //     let necklaces = data.necklaces[i];
        //     $('#ulClasses').append('<li>' + necklaces.description + '</li>');
        // }
    // })
}
homeInfoItems[1].addEventListener('click', appGet_Necklaces);


