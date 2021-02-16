var x="xxaaayy"


var ary=[]
for(var i=0;i<x.length;i++){
    for(var j=0;j<x.length;j++){
        var y= x.slice(i,x.length-j)
        ary.push(y)
    }
}

var ary2=[]

for(var j=0;j<ary.length;j++){
var str=ary[j]
var rev_str=""

if(str.length>=2){
    for(var s=str.length-1;s>=0;s--){

        rev_str= rev_str + str[s]

    }
    if( str==rev_str){
        ary2.push(str)
    }
}
}

// console.log(ary2);

var max=0
var index=0
for( var l=0;l<ary2.length;l++){
    var str=ary2[l]
    if(max<str.length){
        max=str.length
        index=l;
    }
}
// console.log(max);
console.log(ary2[index]);

