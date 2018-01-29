$(document).ready(function(){
    $("#testAPI").on("click", function(){
        console.log("Magic.. Its working");
    });

    var test = $.ajax({
        type: "GET",
        url: "http://localhost:3000/api/test"   
    })
    .done(function(data){
        console.log(data);

    }) 
    .fail(function(){
        console.log("Ohh No!! shits broken");

    });
});

