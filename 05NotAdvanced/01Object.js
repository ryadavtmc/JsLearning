var User = function(firstName, lastName, courseCount){
    this.firstName = firstName
    this.lastName = lastName
    this.courseCount = courseCount
    this.getcourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`)
    }
}

User.prototype.getfirstName = function(){
    console.log(`Your First Name is: ${this.firstName}`)

}
User.prototype.getlastName = function(){
    console.log(`Your Last Name is: ${this.lastName}`)
}

var Nikesh = new User("Nikesh", "Rao", 2)
// console.log(Nikesh)
// Nikesh.getfirstName()
// Nikesh.getlastName()
// Nikesh.getcourseCount()

if (Nikesh.hasOwnProperty("firstName", "lastName", "courseCount")){
    Nikesh.getfirstName()
    Nikesh.getlastName()
    Nikesh.getcourseCount()
}
// else if (Nikesh.hasOwnProperty("lastName")){
//     Nikesh.lastName()
// }
// if (Nikesh.hasOwnProperty("courseCount")){
//     Nikesh.getcourseCount()
// }