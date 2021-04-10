var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`)
    }
}
var Nikesh = Object.create(User)
// console.log(Nikesh)
Nikesh.name = "Nikesh Rao"
Nikesh.getUserName()