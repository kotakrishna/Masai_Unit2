function runProgram(input){
    input=input.split(" ").map(Number)
    var n=input[0]
    var m=input[1]
    var count=0
    var ar=[]

    for(var i=0;i<100;i++){
        for(var j=0;j<100;j++){
            // console.log(i,j);
            if(i**2+j<=n && j**2+i<=m){
                if(i**2+j==n && j**2+i==m){
                    count++
                    ar.push(i,j,"*")
                }
                
            }else{
                break
            }
        }
    }
    console.log(count);
    
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