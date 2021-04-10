var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
request.open('GET', 'https://reqres.in/api/users/2', true)
request.onload = function(){
    //Beign accessing JSON data here
    var d = JSON.parse(this.responseText)
    console.log(d) //gives data
    console.log(this.status)// success message, 200

    //this refers to current object, here request, as request.onload is called, the
    // calling object is request fo the function.
    if(this.status==200)
        console.log("Message from API ")
}