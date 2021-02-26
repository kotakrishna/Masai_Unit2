var btn= document.getElementById("button")

var h1=document.getElementById("orderId")

var count=0

var output_img= document.getElementById("img")

async function call (){
    console.log("hello");
    count++ 
    var pro= new Promise((rev,rej)=>{
       
        var x= setTimeout(() => {
        rev()
            h1.innerHTML=count
            output_img.setAttribute("src","https://image.shutterstock.com/image-photo/minsk-belarus-may-6-2018-600w-1086927731.jpg")
            // output_img.setAttribute("width","200px")
            
        }, 5000)

    })
   
}

btn.onclick=call