function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }


Shape.prototype.calcPerimeter=function(){
    console.log(this.name+" perimeter is = "+ this.sides*this.sideLength);
}

var square=new Shape("Square",4,5)

var triangle=new Shape("Triangle",3,3)


square.calcPerimeter()

triangle.calcPerimeter()