function runProgram(input){
    input=input.split(/[\r\n]+/).map(Number)
    var test=Number(input[0])
    for(var l=1;l<=test;l++){
        for(var loop=1;loop<=input[l];loop++){
        if(loop%3==0 && loop%5!=0){
            // console.log(loop);
            console.log("Fizz");
        }else if(loop%5==0 && loop%3!=0){
            // console.log(loop);
            console.log("Buzz");
        }else if(loop%3==0 &&loop%5==0){
            // console.log(loop);
            console.log("FizzBuzz");
        }else{
            console.log(loop);
        }
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