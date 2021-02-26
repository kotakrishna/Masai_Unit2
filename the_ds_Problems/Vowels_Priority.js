function runProgram(input){
    input=input.split(/[\r\n]+/)
    var test=Number(input[0])
    for(i=1;i<=test;i++){
        var vow=['a','i','o','e','u']
        var str=input[i]
        var out=""
        var vo=""
        for(var j=0;j<input[i].length;j++){
            // for( z in vow){
                if(vow.includes(input[i][j])){
                    vo=vo+input[i][j] 
                }else{
                    out=out+input[i][j]
                }
            // }
            // out=vo;
            
        }
        out=vo+out
        console.log(out);
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