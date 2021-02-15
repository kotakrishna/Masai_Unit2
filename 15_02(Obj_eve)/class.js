var objA={
    name:"masai",
    age:"21"
}

var objB=Object.create(objA)

objB.name="school"
objB.age="25"

Object.prototype.old=function(val){
    va=val
    console.log(this.__proto__[va]);
}

console.log(objB.__proto__.name);

objB.old("name")

