/*
var kota= ()=>{
console.log("great");
}

kota()
var k=1020
var krishna = new Promise((res,rej)=>{
   
    if(k>=2000){
        res("its more than 2000")
    }
    else{
        rej("its less than 2000")
    }
})

krishna
.then((k)=> console.log(k))
.catch((k)=>console.log(k))

krishna.catch(k=>console.log(k))

async function reddy ([val]){
    if(val>=300){
        res("its more than 2000")
    }else{
        rej("its less than 2000")
    }
}

reddy(200).then(k=>console.log(k))




var myFetch=fetch('http://jsonplaceholder.typicode.com/todos/1')

console.log(myFetch);

myFetch.then((x)=>( x.json())) .then(x=>console.log(x))
*/

async function Pro(ticket) { // VERY IMPortant
    return new Promise((res,rej)=>{
        if(ticket>2000){
            res('hello tickect is more than 2000 ')
        }else{
            rej('the ticket is less than 2000')
        }
    })
}

// console.log(myFetch);

// Pro(2200).pro
Pro(200).then(x=>console.log(x)).catch(x=>console.log(x))
// console.log(await Pro(2200))
// console.log()
// .then(x=>console.log(x)).catch(x=>console.log(x))




 // the await

async function getData(){

    var data=fetch("http://jsonplaceholder.typicode.com/todos/1");

    console.log(await(await data).json());
}

getData()


