function Task( title ) { //Construtor function taking the attribute Title
    this.title = title // the title is taken for name
    this.status = false
    this.created_date = new Date()
    this.toogle_task=function() {
            this.status=true
    }
  }
var array_of_task=["buy milk","the book","the eggs"] // this  is the array of the task with variables


for(var i=0;i<array_of_task.length;i++){ // the loop to assign the each task to the function and creating an obj for each 
    array_of_task[i] = new Task(array_of_task[i]);
}

for(var j=0;j<array_of_task.length;j++){ // printing each obj in the array
    console.log(array_of_task[j]);
}

array_of_task[1].toogle_task()

console.log(array_of_task[1])
