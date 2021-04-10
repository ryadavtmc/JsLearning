const uno = () =>{
    console.log("I am One")
}
const dos = () =>{
    setTimeout(()=>{
        console.log("Whoooooooooo!")
    }, 3000)
    console.log("I am Two")
}
const Tres = () =>{
    console.log("I am Three")
}

uno()
dos()
Tres()