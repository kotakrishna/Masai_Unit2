function Teacher(name,subj,experience){
    this.name=name;
    this.subj=subj;
    this.exp=experience;
}

function Student(name,age,standard,total_marks){
    this.name=name;
    this.age=age;
    this.stan=standard;
    this.total_marks=total_marks
}

Student.prototype.Print_bio= function(){
    console.log(`${this.name} is of age ${this.age} from ${this.stan} as got total ${this.total_marks}`);
}
Teacher.prototype.Print_bio= function(){
    console.log(`${(this.name)} is teacher of ${this.subj} with an experience of ${this.exp}`);
}

Object.prototype.Comp_highest_mark= function(obj1,obj2){
    if(obj1.stan==obj2.stan){
        if(obj1.total_marks>obj2.total_marks){
            console.log(obj1.name + " as score higher marks than "+ obj2.name);
        }else if(obj1.total_marks>obj2.total_marks){
            console.log(obj2.name + " as score higher marks than "+ obj1.name);
        }
    }else{
        console.log("the students are not in same standrad");
    }
}

var Student_list=[
["kota",14,10,300],["krishna",14,9,289],["reddy",14,10,299]
]

var Teacher_list=[
    ["miss Roja","Maths",5], ["miss Jasmine", "Science",10],["rohit","English",10]
]
var student={};
for(var i=0;i<Student_list.length;i++){
    student[i]=new Student(Student_list[i][0],Student_list[i][1],Student_list[i][2],Student_list[i][3])
}
var teacher={};
for(var i=0;i<Teacher_list.length;i++){
    teacher[i]=new Teacher(Teacher_list[i][0],Teacher_list[i][1],Teacher_list[i][2])
}


console.log(teacher);

console.log(student);
Comp_highest_mark(student["0"],student["2"])

student["2"].Print_bio()

teacher["1"].Print_bio()