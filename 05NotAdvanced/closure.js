function doAddition(x){
    return function(y){
        return x+y
    }
}

var add = doAddition(4)
console.log(add(8))

console.log(doAddition(4)(2))

function doSubtraction(a){
    return function(b){
        return a -b
    }
}
console.log(doSubtraction(3)(2))