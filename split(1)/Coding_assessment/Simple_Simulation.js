


var human=[]
var animal=[]
var plant=[]

var count=0
var Animal= function(name,food,climate,humanIN){
    this.name=name
    this.Food=food
    this.Living_climate=climate
    this.HumanInteraction=humanIN
    this.canspeak=false
}
var Plants= function(name,Edibile,climate,Medicinal){
    this.name=name
    this.Edibile=Edibile
    this.Living_climate=climate
    this.HumanInteraction=Medicinal
    this.canspeak=false
}
var Human= function(name,nature,climate,Humanity){
    this.name=name
    this.Nature=nature
    this.Living_climate=climate
    this.HumanInteraction=Humanity
    this.canspeak=true
}
var submit=document.getElementById("submit")
var start=function (x){    
    var humans=localStorage.getItem("humans")
var animals=localStorage.getItem("animals")

var plants=localStorage.getItem("plants")
    // count++
    x.preventDefault()
    setTimeout(function(){
        var input=document.getElementById("input").value
        var options=document.getElementById("value").options
    console.log(input);
        var to_check=(options.selectedIndex);
        if(input==""){

        }else{
       
        switch (to_check) {
            case 0:
                input=new Human(input,"nice","ALL","great")
                input=JSON.stringify(input)
                human.push(input)
                localStorage.setItem("humans",human)
                
                break;
            case 1:
                input=new Animal(input,"Herbivories","cold","Kind")
                input=JSON.stringify(input)
                animal.push(input)
                localStorage.setItem("animals",animal)
                break;
            case 2:
                input=new Plants(input,"edible","Tropical","Yes")
                input=JSON.stringify(input)
                plant.push(input)
                localStorage.setItem("plants",plant)
                break;
        
            default:
                break;
        }
        console.log("Animal array is :"+animals);
        console.log("Plants array is :"+plants);
        console.log("Human array is :"+humans);
        console.log(input);
    }
    },1000)


    setTimeout(() => {
        animals=[]
        plantss=[]
        humans=[]
    },120000);
// }
}

submit.onclick=start