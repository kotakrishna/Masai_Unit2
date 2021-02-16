function runProgram(input){
    input=(input)
    var v=["a","i","e","o","u"]
    var count=0;
    for( var i in input){
        for( var j in v){
            if(v[j]==input[i]){
                count++
            }
        }
    }
    console.log(input.length-count);

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