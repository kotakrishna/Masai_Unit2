var ary
var vowel
var top_count
var i;
var j;
ary=["kota","krishna","reddy"]

vowel=["a","i","e","o","u"]

top_count=0

for(i=0;i<ary.length;i++){
    let count
    count=0
    for(j=0;j<vowel.length;j++){
    if(ary[i].includes(vowel[j])){
        count++
    }
    }
    if(count>0){
        top_count++
    }
}
if(top_count==3){
    console.log("TRUE");
}else{
    console.log("FAlSE");
}