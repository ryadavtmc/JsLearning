const Nikesh = {
    firstName: "Nike",
    lastName: "Rao",
    role: "Admin",
    courseCount : 4,
    getInfo :function(){
        console.log(`
        First name is: ${this.firstName}
        Last name is: ${this.lastName}
        Role is: ${this.role}
        Course Count is: ${this.courseCount} courses
        `)
    }
}

const Rj = {
    firstName: "Sam",
    lastName: "RJ",
    role: "Sub-Admin",
    courseCount: 4
}
// Nikesh.getInfo()
// var Nik = Nikesh.getInfo.bind(Nikesh)
// Nik()
// var Nike = Nikesh.getInfo.bind(Rj)
// Nike()
Nikesh.getInfo.call(Rj)