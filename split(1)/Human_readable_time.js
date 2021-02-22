function runProgram(input){
    input=Number(input)
    var x,y
    if(input>=60){
         x=Math.floor(input/60);
         y=input-(x*60)
    }

    if(x==1){
        console.log(`${x}hr ${y}mins`);
    }else{
    console.log(`${x}hrs ${y}mins`)
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