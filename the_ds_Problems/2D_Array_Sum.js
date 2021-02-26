function runProgram(input){
    input=input.split(/[\r\n]+/)
    var K=input[0].split(" ").map(Number)
    var L=[]
    for(var i=1;i<=K[0];i++){
        L.push(input[i].split(" ").map(Number))
    }
    // console.log(Z);
    var len=K[1]
    var val=K[2]
    var count=0
    var sum=0
    var cl_sum=0
    // for(var j=0;j<=1;j++){
    //     if(L[j][0]+L[j+1][0]==val){
    //         console.log(L[j][0]);
    //         break
    //     }
    // }
    // console.log(l0,l1,l2);
    // var L=[l0,l1,l2]
    var di_sum=0
    for(var i=0;i<K[0];i++){
        for(var j=0;j<=K[1]-3;j++){
            sum=L[i][j+0]+L[i][j+1]+L[i][j+2]
            cl_sum=L[j+0][i]+L[j+1][i]+L[j+2][i]
            // console.log(di_sum);
            if(sum==val){
                sum=0
               console.log(L[i][j+0],L[i][j+1],L[i][j+2]); 
                console.log("hello");
                count++
            }
            
            if(cl_sum==val){
                cl_sum=0
                console.log(L[j+0][i],L[j+1][i],L[j+2][i]);
                console.log("hey");
                count++
            }
            if(di_sum==val){
                di_sum=0
                // console.log("wow");
                count++
            }
            sum=0
            cl_sum=0
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