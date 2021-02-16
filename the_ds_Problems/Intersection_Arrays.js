function runProgram(input){
    input=input.split(/[\r\n]+/)
    var len =Number(input[0])
    var ary1=input[1].split(" ").map(Number)
    var ary2=input[2].split(" ").map(Number)
    var u_val=0
    for(var i in ary1){
        for(var j in ary2){
            if(ary1[i]==ary2[j]){
                u_val=ary1[i]
            }
        }
    }
    console.log(u_val);
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