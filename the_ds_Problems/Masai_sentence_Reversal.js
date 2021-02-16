function runProgram(input){
    input=input.split(" ")
    var output= ""
    for(var i=input.length-1;i>=0;i--){
        output= output + input[i] + " " 
    }
    console.log(output);
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