


const User = require("./classreviese.js")

const Ravi = new User("Ravi", "hello@ymail.com")
console.log(Ravi.getInfo())

Ravi.enrollCourse("Javascript")
Ravi.enrollCourse("Javas")
Ravi.enrollCourse("Javasct")
console.log(Ravi.getcourseList())

let courses = Ravi.getcourseList()

courses.forEach((c) => console.log(c))
console.log(courses.length)