var name = "Nikesh";

console.log("Line number 3", name);

function sayName(){
    var name = "I am H";
    console.log("Line 7", name);

    sayNameTwo();

    function sayNameTwo(){
        var name = "Mr C";
        console.log ("Line number 12" , name)
    }
}

sayName();