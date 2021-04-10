function isEven(element){
    if (element % 2 === 0){
        return true;
    }
    return false;
}

console.log(isEven(2));
console.log("----------------------------");

var isEven = (element) => {
    return element % 2 === 0;
}
console.log(isEven(3));
console.log("----------------------------");
var result = [2,4,6,8].every(isEven); //.every() is callback function --> To learn more go to mdn javascript
console.log(result);

var rslt = [2,4,6,8,10].every((e) => ( e% 2 ===0));  //while writing arrow function if we want to return any value we can only use {}, otherwise we use ().
console.log(rslt);