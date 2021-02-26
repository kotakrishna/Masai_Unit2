function runProgram(input){
    input=input.split(" ").map(Number)
    var long=input[0]
    var width=input[1]
    for(var i=1;i<=long;i++){
        // for(var j=1;j<=width;j++){
            // console.log(i*'#');
            var output=""
            for(var j=0;j<width;j++){
                output=output+"#"
            }
            var output1=""
            for(var j=0;j<width-1;j++){
                output1=output1+"."
            }

            // console.log(output);
            if(i%2!=0){
                console.log(output);
            }else if(i%4==0){
            output1="#"+output1
                console.log(output1);
            }else{
                output1=output1+"#"
                console.log(output1);
            }
        // }
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