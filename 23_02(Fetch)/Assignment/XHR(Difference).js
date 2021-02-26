


var xhr = new XMLHttpRequest //creating an XML Http Request

xhr.open("GET","https://reqres.in/api/users?page=2") // opening the API

xhr.send() // sending the request

xhr.onload= function(){ // onload get the responce
    xhr.response
}


fetch("https://reqres.in/api/users?page=2") // setting the api and method
.then((resp)=>resp.json).then((res)=>console.log(res)) // getting then print the wanted details