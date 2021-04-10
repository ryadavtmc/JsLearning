const uno = ()=>{
    return "I am One!"
}

// const dos = ()=>{
//     setTimeout(()=>{
//         return "I am Two"
//     },3000)
  
// }



const Tres = ()=>{
    return "I am Three!"
}

const callMe =()=>{
    let valone = uno()
    console.log(valone)

    let valTwo = dos()
    console.log(valTwo)

    let valThree = Tres()
    console.log(valThree)
}

callMe()