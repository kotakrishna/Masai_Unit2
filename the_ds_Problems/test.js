function runProgram(input) {
    var arr = input.trim().split(/[\r\n]+/)
    var t = arr[0].trim().split(" ").map(Number)
    var j = 1
    for (var i = 1; i <= t; i++) {
        var row_column = arr[j].trim().split(" ").map(Number)
        var row = row_column[0]
        var column = row_column[1]
        var shape = []
        for (var k = 0; k < row; k++) {
            var r1 = arr[++j].trim().split(" ")
            shape.push(r1)
        }
        console.log(shape);
        j = j + 1

        var count = 0
        if (row == 1 && column == 1) {
            var ele = shape[0][0]

            if (ele != "a" && ele != "e" && ele != "i" && ele != "o" && ele != "u") {
                count++
            }
            console.log(count)
        } else if (row % 2 == 1 && row != 1 && (row - column) == (column - 1)) {
            var m = 0,
                n = column - 1

            while (m < row && n >= 0) {
                var ele = shape[m][n]

                if (ele != "a" && ele != "e" && ele != "i" && ele != "o" && ele != "u") {
                    count++
                }
                m++
                n--
            }
            n = 1
            while (m < row && n < column) {
                var ele = shape[m][n]
                if (ele != "a" && ele != "e" && ele != "i" && ele != "o" && ele != "u") {
                    count++
                }
                m++
                n++
            }
            console.log(count)
        } else {
            console.log(-1)
        }
    }
}


function alternate_sum(num_arr) {
    var sum = 0
    for (var i = 0; i < num_arr.length; i = i + 2) {
        sum = sum + num_arr[i]
    }
    return sum
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