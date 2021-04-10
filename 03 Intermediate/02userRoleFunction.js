// Define a function that can answer the role of a user. 
// A user avan be on following roles: 
// admin - with all access 
// subadmin - with access to create/delete courses 
// testprep - wiht access to create/delete tests 
// user - consume all content 
// other -trial user

var getUserRole = function (name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            
            break;
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`

        case "testprep":
            return `${name} is a test prep to create/delete tests`
        case "user":
            return `${name} is a user to consume all content`

        default:
            return `${name} is a trial user`
            
    }
}

console.log(getUserRole("Sam", "subadmin"))
var role = getUserRole("Alex","")
console.log(role)
