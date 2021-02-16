function runProgram(input){
    l=input.split("")
    input=Number(input)
    var count=0
    for(var x=0;x<l.length;x++){
        if(l[x]==4 || l[x]==7){
            count++
        }
    }
    // console.log(count);
    if((count==l.length || input%4==0)||input%7==0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
    // console.log(l);
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