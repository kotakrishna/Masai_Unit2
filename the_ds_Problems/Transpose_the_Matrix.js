function runProgram(input){
    input=input.split(/[\r\n]+/)
    var L=(input[0]).split(" ").map(Number)
    var total=[]
    var sum=0;
    for(var i=1;i<=L[0];i++){
        total.push(input[i].split(" ").map(Number))
    }
    var str=""
    var out= []
    for(var i=1;i<=L[1];i++){
            out.push([])
    }
    for(var i =0;i<total.length;i++){
        for(var j=0;j<total[i].length;j++){
            out[j][i]=total[i][j]
        }
    }
    for(var i =0;i<out.length;i++){
        str=""
        for(var j=0;j<out[i].length;j++){
            str= str+(out[i][j].toString())+" "
        }
        console.log(str);
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