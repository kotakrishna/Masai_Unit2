var x="masai"

String.prototype.reverse=function(){
    var l=x;
    var o=""
    
    for(var i=l.length-1;i>=0;i--){
        o=o+l[i]
    }
    console.log(o);
}
var j=x.reverse()

