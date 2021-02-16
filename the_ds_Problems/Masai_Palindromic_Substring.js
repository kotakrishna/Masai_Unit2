function runProgram(input){
    input=input

        var x=input
        if(x.length>1){
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


        var max=0
        var index=0
        for( var lng in ary2){
            var str=ary2[lng]
            if(max<str.length){
                max=str.length
                index=lng;
            }
        }

        console.log(ary2[index].length);

    }else{
        console.log(1);
    }
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});