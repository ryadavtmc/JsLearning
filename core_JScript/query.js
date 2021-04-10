/* BY TAG  */
let para=document.querySelector('h1') //h1 tag
console.log(para) //<h1>testing</h1>
console.log(para.innerText) //testing
//print the value of h1 inner content in some id
let h2para=document.querySelector('h2') //h1 tag
h2para.innerText=para.innerText //<h1>testing</h1>
//by ID
para=document.querySelector('#all') //h1 tag
console.log(para)
