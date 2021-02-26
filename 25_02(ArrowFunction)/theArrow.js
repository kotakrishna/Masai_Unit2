var obj = { // does not create a new scope
    i: 10,
    b: () => console.log("Arrow in obj  :"+this.i, this),
    c: function() {
      console.log("Function in obj  :"+this.i, this);
    },
    // d: () => console.log(this.i),
  }

function Z (name){
    this.name=name
    this.y = ()=>{
        console.log("Arrow in const "+this.name);
    }
    this.z =function(){
        console.log("function in const "+ this.name);
    }

}
Z.prototype.w=function(){
    console.log("prototype function : "+this.name);
}
Z.prototype.m=()=>{
    console.log("prototype Arrow :"+this.name);
}
var x=new Z("kota")
x.y()
x.z()
x.w()
x.m()
obj.b()
obj.c()