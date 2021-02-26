var post=document.getElementById("post")
var todo=document.getElementById("todos")
var Album=document.getElementById("Albums")
var user=document.getElementById("user")
var postf=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{})
    .then(res=>res.json())
    .then(json=>console.log(json))
}
var todof=()=>{
    fetch("https://jsonplaceholder.typicode.com/todos",{})
    .then(res=>res.json())
    .then(json=>console.log(json))
}
var Albumf=()=>{
    fetch("https://jsonplaceholder.typicode.com/albums",{})
    .then(res=>res.json())
    .then(json=>console.log(json))
}
var userf=()=>{
    fetch("https://jsonplaceholder.typicode.com/users",{})
    .then(res=>res.json())
    .then(json=>console.log(json))
}
post.onclick=postf
todo.onclick=todof
Album.onclick=Albumf
user.onclick=userf