function runProgram(input){
    input=Number(input)
    var count=0;
        for(var i=1;i<=input;i++){
            if(input%i==0){
                count++
            }
        }
        if(count<=2){
            console.log("Yes");
        }else{
            console.log("No");
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