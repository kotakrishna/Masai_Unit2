function runProgram(input){
    input=input.split(/[\r\n]+/)
    var test=Number(input[0])
    var ary=[]
    // var row_sum=0
    var i=1
    var diff=[]
    var ary_cont=[]
    while(input[i]!=null){
        var rc=input[i].split(" ")
        var rows=Number(rc[0])
        // row_sum=row_sum+Number(rows)
        var col=Number(rc[1])
        var count=0
        
        for(var j=0;j<=rows;j++){
            ary.push(input[i+j])
            count++
        }
        if(count>=rows){
            diff.push(ary)
        }
       ary=[]

        
        
        // if(count>=rows){
        //     // ary.push("x")
        //     // console.log(rows);
        //     if(rows%2==0){
        //         console.log("-1");
        //     }else{
        //         var col1=col;
        //         for(var c=1;c<=rows;i++){
        //             var xy=ary[c].split(" ")
        //             if(c<Math.ceil(col/2)){
        //                 ary_cont.push(xy[col1])
        //                 col1--
        //             }else{
        //                 col1++
        //                 ary_cont.push(xy[col1])
        //             }
        //         }
        //     }
            
        //     ary=[]
        // }
        i++
        i=i+rows
    }

    for(var c=0;c<diff[0].length;c++){
        var the_ary=(diff[0]);
        // console.log(the_ary[0][0]);
    // }

        if(the_ary[0][0]%2==0){
            console.log("-1");
        }
        else{
            // var 
            var c= Number(the_ary[0][0])
            var r=Number(the_ary[0][2])
            // console.log(c,r);
            // for(z=1;z<=c;z++){
            //     var w=(the_ary[z]).split(" ")
            //     // console.log(w);
            //     for(y=r;y>=0;y--){
            //         console.log(w[y]);
            //         // console.log(the_ary[z][y]);
            //         // if(z<=Math.ceil(y/2)){
            //         //     console.log(w[z][y]);
            //         //     // y--
            //         // }
            //         // else{
            //         //     if(y<r){
            //         //     console.log(the_ary[z][y+]);
            //         // }
            //         // }
            //         // y--

            //     }
            //     // z++
               
            // }
            // var r=the_ary[0]
            // console.log(r);
        }
        // if()
    }

// console.log(i);   
console.log(diff); 
// console.log(the_ary);
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