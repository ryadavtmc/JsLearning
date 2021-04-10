var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")
var title = document.querySelector(".title")


title.align = "center"



counter.align = "center"
// counter.innerHTML = "1002"
let count = 1
followers.align = "center"
setInterval(()=>{
    if (count <= 1000)
    {count ++;
    counter.innerText = count;
}

},10 )

setTimeout(()=>{
    followers.innerText = "Followers in Instagram"
},9999 )