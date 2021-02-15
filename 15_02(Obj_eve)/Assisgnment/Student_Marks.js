function Student(name,mark_obt){
    this.name=name;
    this.marks_obt=mark_obt;
    this.marks_OF=300
}


var calPer=function (val){
    console.log(`${this.name}`+` got the perscent of `+ (this.marks_obt/this.marks_OF)*100);
    this.per= (this.marks_obt/this.marks_OF)*100
}

var student_list=[
    ["Kota",290],["Krishna",250],["Rahul",280],["sai",200],["chintu",180],["Reddy",280],["Niranjan",299],["sindhu",250],["Shiva",299],["Rao",285]
]

var student={}

for(var i=0;i<student_list.length;i++){
    student[student_list[i][0]]=new Student(student_list[i][0],student_list[i][1])
    calPer.call(student[student_list[i][0]])
}
console.log(student);


