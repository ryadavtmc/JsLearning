// Create an application with follwoing roles:
// admin - gets full access 
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests 
// user - gets access to consume content

var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access")
        
        break;
    case "subadmin":
        console.log("get access to create/delete courses")
        
        break;
    case "testprep":
        console.log("get access to create/delete tests")
        
        break;
    case "user":
        console.log("get access to consume content")
        break;

    default:
        console.log("Trial user")
        break;
}