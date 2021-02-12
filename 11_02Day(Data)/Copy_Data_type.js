var obj1={
    greeating:"hello"
}
var obj2={};
function copy(obj1,obj2){
    // var x=obj1;
    Object.keys(obj1)
    for(var i=0;i<Object.keys(obj1).length;i++){
        Object.keys(obj2)[i]=Object.keys(obj1)[i]
    }
}
copy(obj1,obj2);
obj2.greeating="hey"

var ary1=[1,2,3,4,5,6,7]
var ary2=[];
function copy_ary(ary1,ary2){
    for(var i=0;i<ary1.length;i++){
        ary2[i]=ary1[i]
    }
}
copy_ary(ary1,ary2);
ary2[2]=100

console.log(ary1);
console.log(ary2);
console.log(obj1);
console.log(obj2);
