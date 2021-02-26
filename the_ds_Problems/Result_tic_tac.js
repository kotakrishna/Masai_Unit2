function runProgram(input){
    input=input.split(/[\r\n]+/)
    var l0=input[0].split(" ")
    var l1=input[1].split(" ")
    var l2=input[2].split(" ")
    var count=0
    // console.log(l0,l1,l2);
    var L=[l0,l1,l2]
    for(var i=0;i<L.length;i++){
        if((L[i][0]==L[i][1])&& L[i][1]==L[i][2]){
            count++
            console.log(L[i][0]);
            break
        }else if((L[0][i]==L[1][i])&& L[1][i]==L[2][i]){
            count++
            console.log(L[0][i]);
            break
        }else if((L[0][0]==L[1][1])&& L[1][1]==L[2][2]){
            count++
            console.log(L[0][0]);
            break
        }else if((L[0][2]==L[1][1])&& L[1][1]==L[2][0]){
            count++
            console.log(L[1][1]);
            break
        // }else{
        //     console.log("Tie");
        //     break
        // }
        }
    }
    if(count==0){
        console.log("Tie");
    }
    // console.log(L);
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