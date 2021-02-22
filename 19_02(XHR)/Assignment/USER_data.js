var input= document.getElementById("input")
var output= document.getElementById("output")
var submit= document.getElementById("submit")
var timer=document.getElementById("timer")

var stop1=document.getElementById("stop")


submit.addEventListener("click",start)



var val =input.value
console.log(input.value);
var count=1
function start(){
    console.log(input.value);
    event.preventDefault()
    console.log("start");
    stop1.addEventListener("click",stop2)
    var x= setTimeout(function(){
        var xhr = new XMLHttpRequest()
        console.log("inlop");
        var url ='https://reqres.in/api/users/'+input.value
        xhr.open('GET','https://reqres.in/api/users/'+input.value)
        
        xhr.send()
        xhr.addEventListener("load",function(){
            // console.log(xhr.response);
            // console.log("hello  ");
            if(xhr.status==404){
                console.log(xhr.status);
                output.innerHTML=xhr.status
                
            }else{
                console.log(xhr.response);
                output.innerText=xhr.response
            }
        })
        clearInterval(z)
    },4000)
    var z=setInterval(() => {
        timer.innerHTML=count
        count++
    }, 1000);

    function stop2(){
        console.log("stop");
        clearInterval(z)
        clearTimeout(x)
    }
}


