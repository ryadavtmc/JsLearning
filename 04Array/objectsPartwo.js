var user = {
    firstName : "Nikes",
    lastName : "Rao",
    role : "Admin",
    loginCount : 5,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return ` ${this.firstName} is enrolled in total of ${this.courseList.length} courses
        `;
    },
    info : function (){
        return `
       User Name : ${this.firstName} ${this.lastName}
       Logged In from Facebook : ${this.facebookSignedIn}
       User role : ${this.role="guest"},
       User login Count : ${this.loginCount=25},
       Course List : ${this.courseList},
       Course Count : ${this.getCourseCount()} 
       `
    }
};

var courseList = true;
// console.log(user.firstName)
user.buyCourse("React Js")
user.buyCourse("Angular")
// console.log(user.getCourseCount())
console.table(user.info())
console.table(user)
