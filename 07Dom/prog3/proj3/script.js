const courses = [
    {
        name: "Complete ReactJs course",
        price: 2.1,
        StudyMethod: "Online"
    },
    {
        name: "Complete Angular course",
        price: 2.3,
        StudyMethod: "Self-study"
    },
    {
        name: "Complete Django course",
        price: 3.8,
        StudyMethod: "Online"
    },
    {
        name: "Complete JavaScript course ",
        price: 3.5,
        StudyMethod: "face-to-face"
    }

]

function generateLIST(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    courses.forEach(course =>{
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const div = document.createElement("div")
        div.classList.add("col-sm")

        const studyMethod = document.createTextNode(course.StudyMethod+" ")
        // studyMethod.classList.add("float-middle")
        div.appendChild(studyMethod)

        const span = document.createElement("span")
        span.classList.add("float-right")

      

        const price = document.createTextNode("$" +course.price)
        span.appendChild(price)


        li.appendChild(div)
        li.appendChild(span)
        ul.appendChild(li)

    })

}

generateLIST()

const button = document.querySelector(".sort-btn")
button.addEventListener("click", ()=>{
    courses.sort((a,b) => a.price-b.price)
    generateLIST()
})
const buttons = document.querySelector(".sort-btns")
buttons.addEventListener("click",()=>{
    courses.sort((a,b) => b.price-a.price)
    generateLIST()
} )
