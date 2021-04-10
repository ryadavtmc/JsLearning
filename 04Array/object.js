var user = {
    firstName : "Nikes",
    lastName : "Rao",
    role : "Admin",
    loginCount : 5,
    facebookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.role)
user.role = "guest";
console.log(user.role)
console.table(user)