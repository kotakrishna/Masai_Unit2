function runProgram(input){
    j=Number(input)
    input=(input).split("").map(Number)

    var num=input.map(Number)
    
    var rev_val=0
    for(var i=0;i<num.length;i++){
       ( rev_val= rev_val + (num[i]*(10**i)));
    }
    
    if(j==rev_val){
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