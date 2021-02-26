function runProgram(input){
    input=input.split(/[\r\n]+/)
    var test=Number(input[0])
    for(i=1;i<=test;i++){
        var count=0
        var number=Number(input[i])
        for(var j=1;j<=10;j++){
            if(number/(2**j)==1){
                console.log("True")
                count++
                break
            }
        }
        if(count==0){
            console.log("False")
            // break
        }
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