var h1= document.getElementById("output")
var count=0
localStorage.setItem("count","null")

function decre(){
    count--
    h1.innerHTML=count
    localStorage.setItem("count",count)
}
function incre(){
    count++
    h1.innerHTML=count
    localStorage.setItem("count",count)
}

var inc=document.getElementById("increment")
var dec=document.getElementById("decrement")

dec.addEventListener("click",decre)
inc.addEventListener("click",incre)

