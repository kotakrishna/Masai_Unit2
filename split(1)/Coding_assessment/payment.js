var timer1=document.getElementById("timer")
var Card=document.getElementById("Card").value
var cvv=document.getElementById("CVV").value
var name1=document.getElementById("Full_Name").value
var add=document.getElementById("Address").value
var otp=document.getElementById("OTP").value

var submit=document.getElementById("submit")
var count=0
var call =function (){
    event.preventDefault()
    console.log("submit");
    count++
 
 localStorage.setItem("timer",timer)
 localStorage.setItem("card",Card)
 localStorage.setItem("cvv",cvv)
 localStorage.setItem("name",name1)
 localStorage.setItem("Address",add)
 localStorage.setItem("OTP",otp)
 clearInterval(x)
//  timer1,innerHTML=timer
 stop()
 

}

var timer=60;
function stop ( ){
    clearInterval(x)
    
}

if(count==0){
    var x=setInterval(function() {
        timer--
        timer1.innerHTML=timer
        // console.log(timer);
        if(timer<=0){
            {
            alert("Sorry, your session is expired")
            clearInterval(x)
        }
        }
    },1000);
}


submit.onclick=call