function runProgram(input){
    input=input.split(/[\r\n]+/)
    var len=Number(input[0])
    var array=input[1].split(" ").map(Number)
    var sum=0;
    for( var i in array){
        sum=sum+array[i]
    }
    var val_array=[]
    for(var i in array){
        var x=sum;
        if((x-array[i])%7==0){
            val_array.push(array[i])
        }
    }
    if(val_array.length!=0){
        var min=val_array[1];
        for( var i in val_array){
            if( min>val_array[i]){
                min=val_array[i]
            }
        }
        var ind=0;
        for( var i in array){
            if(min==array[i]){
                ind=i;
            }
        }
        console.log(ind);    
    }
    else{
        console.log("-1");
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