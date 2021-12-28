
console.log("js linked");

const necklaceLink = document.getElementById('necklaces');

function showNecklaces(){
    console.log('Showing necklaces...');

    let necklaces = $('#necklaces').val();
    console.log('Necklaces: ' + necklaces);

    $.get('/necklaces', function(data){
        console.log('Back from server with: ');
        console.log(data);

        $('#allNecklaces').append('<h3>Necklaces Currently Available</h3>');
        for(let i=0; i<data.necklaces.length; i++){
            let necklaces = data.necklaces[i];
            $('#ulClasses').append('<li>' + necklaces.description + '</li>');
        }
    })
}
necklaceLink.addEventListener('click', showNecklaces);
