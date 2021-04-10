var myMap = new Map()
myMap.set(1, "Hash")
myMap.set(2, `Role : Admin`)
myMap.set(3, `Role : Sub-Admin`)
myMap.set(4, `Role : Guest`)



console.log(myMap)

for(let [key,value] of myMap){
    console.log(`Key is : ${key} and value is : ${value}`)
}

console.log(myMap.delete(4))

console.log(myMap)
// console.log(myMap.clear())
console.log(myMap.get(1))