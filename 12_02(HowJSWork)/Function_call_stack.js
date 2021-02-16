function a(){
    b()
    console.log("the first a function");
}

function b(){
    c()
    console.log("the second b function");
}

function c(){
    d()
    console.log("the third c function");
}

function d(){
    console.log("the fourth d function");
}
a()