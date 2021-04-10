const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

// console.log(window.getComputedStyle(red).background)

const getBGColor = (SelectedElement)=>{
    return window.getComputedStyle(SelectedElement).backgroundColor

}
// var Color = getBGColor(violet)

// violet.addEventListener('mouseenter', ()=>{
//     center.style.background = Color
// })

const magicColorChanger = (element, color)=> {
    return element.addEventListener('mouseenter', ()=>{
        center.style.background = color
    })

}
magicColorChanger(red, getBGColor(red))
magicColorChanger(cyan, getBGColor(cyan))
magicColorChanger(orange, getBGColor(orange))
magicColorChanger(violet, getBGColor(violet))
magicColorChanger(pink, getBGColor(pink))
