function runProgram(input){
    input=input.split(/[\r\n]+/)
    var test=Number(input[0])
    // console.log(test);
    for(var i=1;i<=test*2;i++){
        var count=0
        var len=Number(input[i])
        // console.log(len);
        // console.log(i +"before the increment");
        i++
        var ary=input[i].split(" ").map(Number)
        // console.log(i+"after increment");
        for( var z=0;z<ary.length;z++){
            if(ary[z]%2==0 && ary[z+1]%2==0 && ary[z+2]%2==0){
                count++
            }
        }
        if(count>0){
            console.log("Yes");
        }else{
            console.log("No");
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