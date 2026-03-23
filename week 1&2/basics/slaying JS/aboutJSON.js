//array of objects
const todo = [
    {
        id : 1,
        task : "do laundary",
        iscompleted : true,
    },
    {
        id : 2,
        task : "take out trash",
        iscompleted : false,
    },
    {
        id : 1,
        task : "build a mini projects",
        iscompleted :false,
    }
];
console.log(todo[1].task)//prints take out trash 

//JSON (Javascript Object Notation):normal str with strict rules
// rules : key-val pairs , only double quotes allowed 

const todoJSON = JSON.stringify(todo);
console.log(todoJSON)

//loops
for(let i =0 ; i<todo.length;i++){
    console.log(todo[i].task)
}
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

//foreach , map ,filter
todo.forEach(function(todo){//higher order array 
    console.log(todo.task);
})
const todoTask = todo.map(function(todo){//map returns an array 
    return todo.task
})
console.log(todoTask);
const todoCompleted = todo.filter(function(todo){//map returns an array 
    return todo.iscompleted == false
})
console.log(todoCompleted);
const incompletedTasks = todo.filter(function(todo){//map returns an array 
    return todo.iscompleted == false
}).map(function(todo){
    return todo.task
})
console.log(incompletedTasks)
