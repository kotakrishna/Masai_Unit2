var inputs=document.querySelectorAll("input")
var table=document.getElementById("table")
function get(){
    var table=document.getElementById("table")
    event.preventDefault()
function Student(name,age,number,city){
    this.name=name
    this.age=age
    this.number=number
    this.city=city
}
// for(var i=0;i<inputs.length;i++){
//     console.log(inputs[i].value);
// }
var task=new Student(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value)

console.log(task);

function for_table(){
    var tr=document.createElement("tr")
    var name=document.createElement("td")
    var age=document.createElement("td")
    var number=document.createElement("td")
    var City=document.createElement("td")
    name.textContent=this.name
    tr.appendChild(name)
    age.textContent=this.age
    tr.appendChild(age)
    number.textContent=this.number
    tr.appendChild(number)
    City.textContent=this.city
    tr.appendChild(City)
    if(this.name==""||this.age==""||this.number==""||this.city==""){
        alert("enter valid input to get data")
    }else{
    table.appendChild(tr)
}
}

for_table.call(task)
//  console.log(task.name);
function fun(val)
 {
     val.value=""
     count++
     if(count==5){
         val.value="Submit"
     }
}
var count=0
 inputs.forEach(fun)
 
}
var btn=document.getElementById("submit")

btn.onclick=get

