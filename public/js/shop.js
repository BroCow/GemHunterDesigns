
function shopNecklaces(){
    console.log("Beginning hunt for necklace gems...");

    let shop = $("#shopButton").val();
    console.log(shop);

    $.get("/necklaces", function(){
        console.log("Server contacted.");
    });
}