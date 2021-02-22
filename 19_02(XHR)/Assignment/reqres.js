
// TO get data from  the API 
function get_data(){
var xhrg= new XMLHttpRequest()

 xhrg.open('GET','https://reqres.in/api/users?page=2')

 xhrg.send()

 xhrg.addEventListener('load',function(){
    console.log( xhrg.response)
 })

}

// The POST method to post data to API

function post_data(){
 var xhrp=new XMLHttpRequest()

 xhrp.open('POST','https://reqres.in/api/users')

 var data={
    "name": "morpheus",
    "job": "leader"
}
 xhrp.send(data)

 xhrp.addEventListener('load',function (){
     console.log( xhrp.response)
 })

}

// to pubish the data using PUT Method 

function put_data(){
var xhrpu= new XMLHttpRequest()

xhrpu.open('PUT','https://reqres.in/api/users?page=2')

var val={
    "name": "morpheus",
    "job": "zion resident"
}

 xhrpu.send(val)

 xhrpu.onload=function(){

    console.log( xhrpu.response)
 }
}
var div=document.getElementById("div")
// the DELETE Method is to delete the given data 
function del_data(){
    console.log("hello");
    var xhrdel= new XMLHttpRequest()

    xhrdel.open('DELETE','https://reqres.in/api/users/2',true)

    xhrdel.send(null)
    xhrdel.onload= function (){
        console.log("hey");
    console.log( xhrdel.status);
    }

    xhrdel.onerror= function(){
        console.error("request failed")
    }
    // xhrdel.onerror= function(){
    //     console.log(xhrdel.response);
    // }
    // xhrdel.send(null)
}