function runProgram(input){
    input=input.split(/[\r\n]+/)
    var len =Number(input[0])
    var ary =input[1].split(" ").map(Number)
    var SP_sum=0

    function AB_dif(val1,val2){
        if(val1-val2>0){

            
            return (val1-val2)
        }else{
            
            
            return (val2-val1)
        }
    }
    for(var x=0;x<ary.length;x++){
        for(var j=x+2; j<ary.length;j++){
    var count=0;
    input_case=(j-x)
    
        for(var i=1;i<=input_case;i++){
            if(input_case%i==0){
                
                count++
            }
        }
        if(count<=2){
            
            SP_sum=SP_sum+AB_dif(ary[x],ary[j])
        }
    }
    }
    console.log(SP_sum);
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