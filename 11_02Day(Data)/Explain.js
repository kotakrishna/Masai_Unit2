var str="masai" // Primitive
var obj={   // Non Primitive
    title:[1,2,3,4,5,6]
}
console.log(str+" string before the change");

console.log(obj["title"] +" object before the change");

str="school"
str[0]="z"
console.log(str +'string after the Change');
var x=obj["title"];
x[2]="z"
console.log(obj.title +" object after the change");