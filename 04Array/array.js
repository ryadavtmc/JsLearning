var countries =["USA", "Nepal", "Russia", "India"];
var states = new Array("Rajasthan", "Assam", "Mumbai");

console.log(states[2]);
console.log(countries.length);
//Repalce the value in array

states[0]= "Punjab";
console.log(states);

var user = ["Sam", "sam@hello.com", 3.4, 34,true];
console.log(user);
//Remove the value at end  i.e. true
user.pop();
console.log(user);
// put the value at very first of array
user.unshift("New value");
console.log(user);
//Delete the value at front of the array
user.shift();
console.log(user);
//Index of
//Index of
console.log(user.indexOf(3.4));
//Value does not present in the array gives -1
console.log(user.indexOf("Hello"));

console.log(Array.from("Hello")); // -> It gives output [ 'H', 'e', 'l', 'l', 'o' ].
