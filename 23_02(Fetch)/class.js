var h1=document.createElement("h4")
var body=document.querySelector("body")
var name1=document.getElementById("name")
var email=document.getElementById("email")
var password=document.getElementById("password")
var user_name=document.getElementById("user_name")
var ph=document.getElementById("num")
var desp=document.getElementById("desp")
var submit=document.getElementById("submit")
var lg_mail=document.getElementById("lg_mail")
var lg_pass=document.getElementById("lg_pass")
var lg_submit=document.getElementById("lg_submit")

 
var call =function (){

    event.preventDefault()

    var Create=function (name,email,password,user_name,ph,desp){
        this.name=name
        this.email=email
        this.password=password
        this.username=user_name
        this.mobile=ph
        this.description=desp
    }

    var user= new Create(name1.value,email.value,password.value,user_name.value,ph.value,desp.value)

    user=JSON.stringify(user)
    console.log(user);

    fetch(" https://masai-api-mocker.herokuapp.com/auth/register",{
        method:"Post",
        body:user,
        headers:{
            'Content-Type':'application/json'
        }
    }).then(function(res) {
        res.json().then((resp)=>{
            console.log(resp);
        })
    })
}


submit.onclick=call



var calling = function(){
    event.preventDefault()
    var Details=function (user_name,password){
        this.password=password
        this.username=user_name
    }

    var login=new Details(lg_mail.value,lg_pass.value)

    login=JSON.stringify(login)
    console.log(login);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"Post",
        body:login,
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then((res)=>{
        res.json().then((resp)=>{
            console.log(resp);
            h1.innerHTML=resp.token
            getData(resp.token)
            localStorage.setItem("token",resp.token)
        })
    })
}

lg_submit.onclick=calling


function getData(token){
// var token=JSON.parse( localStorage.getItem("token"))

fetch('https://masai-api-mocker.herokuapp.com/user/Kota_Gokul_reddy',{
    headers:{
        'Authorization':`Bearer ${token}`
    }
}).then((res)=>{
    res.json().then((resp)=>{
             console.log(resp)
            })
})


}

body.append(h1)