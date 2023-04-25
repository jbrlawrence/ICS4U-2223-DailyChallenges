
class ToDoItem{
    constructor(text, done, dateAdded, dateDue){
        this.text = text;
        this.done = done;
        this.dateAdded = dateAdded;
        this.dateDue = dateDue;
    }
    display(parent){

    }
    toggleDone(){

    }
}

let myToDos = [];

myToDos.push(new ToDoItem("Walk the dog", false, new Date(), new Date('2023-04-25T16:00:00')));

console.log(myToDos)