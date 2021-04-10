// const user = ["Ravi", 4, "guest"]
// var [name, courseCount, role] = user

// console.log(role)

const myUser = {
    name : "Ravi",
    courseCount : 6,
    role : "guest"
}
const {name, courseCount , role} = myUser

console.log(myUser)
// console.log(role)

for(const result in myUser){
    console.log(result+ " : " +myUser[result])
}