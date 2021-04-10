class student{
    constructor(name, classes, RollNo){
        this.name = name;
        this.classes = classes;
        this.RollNo = RollNo
    }
    getclassInfo(){
        return this.name, this.classes, this.RollNo
    }
    arrays = []
    arraysfill(fill){
        this.arrays.push(fill)
    }
    getarraysfill(){
        return this.arrays
    }
}

const studentInfo = new student("Ravi", "Grade XII", 24)
console.log(studentInfo)
console.log(studentInfo.name)
delete studentInfo.RollNo
console.log(studentInfo)

studentInfo.arraysfill("length")
studentInfo.arraysfill("name")
studentInfo.arraysfill("arguments")
studentInfo.arraysfill("caller")
studentInfo.arraysfill("prototype")
studentInfo.arraysfill("isArray")
studentInfo.arraysfill("observe")
studentInfo.arraysfill("unobserve")


let students = studentInfo.getarraysfill()
console.log(students)
students.forEach((c) => console.log(c))
console.log(students.length)