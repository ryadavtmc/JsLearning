const User = require("./class.js")

const users = new User("Ravi", "sam@ymail.com")

console.log(users.getInfo())
console.log(users.getInfo().name+ " "+users.getInfo(). email)

users.enrollCourse("Java")
users.enrollCourse("Javascript")
users.enrollCourse("React")
// console.log(users.getCourseList())
let courses = users.getCourseList()

courses.forEach((c) => console.log(c))