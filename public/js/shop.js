
function shopNecklaces(){
    console.log("Beginning hunt for necklace gems...");

    let shop = $("#shopButton").val();
    console.log(shop);

    location.href = '/product/huntGems';
    // $.get("/necklaces", function(){
    //     console.log("Server contacted.");
    // });
}