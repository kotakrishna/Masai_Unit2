// TO get data from  the API 

var sc=document.getElementById("script")

var sub= document.getElementById("submit")

var output=document.getElementById("output")
sub.addEventListener("click",function(){
    event.preventDefault()
    // console.log(sc.options[0])
// if()
    switch (sc.selectedIndex) {
        case 0: get_data()
            
            break;
        case 1: post_data()
            
            break;
        case 2: put_data()
            
            break;
        case 3: del_data()
            
            break;
    
        
    }

function get_data(){
    var xhrg= new XMLHttpRequest()
    
     xhrg.open('GET','https://reqres.in/api/users?page=2')
    
     xhrg.send()
    
     xhrg.addEventListener('load',function(){
        output.innerHTML=( xhrg.response)
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
        output.innerHTML=( xhrp.response)
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
    
        output.innerHTML=( xhrpu.response)
     }
    }

function del_data(){
    var xhrdel= new XMLHttpRequest()

    xhrdel.open('DELETE','https://reqres.in/api/users/2',true)

    xhrdel.send(null)
    xhrdel.onload= function (){
        // console.log("hey");
        output.innerHTML=( xhrdel.status);
    }
}
})
