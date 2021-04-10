var testArray = [2,4,6,8,10];
// console.log(testArray.fill("h",1,4));
// console.log(testArray.fill("empty"));
var num = (num) =>{
    return num > 5;
} 
const result = testArray.filter(num);
console.log(result)

var isEven = element => element % 2 === 0;
console.log(isEven(3))
var results = [2,6,8,10,2,12].every(isEven);
console.log(results)