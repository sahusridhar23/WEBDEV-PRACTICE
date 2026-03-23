//alert
// alert("hello world");
//console
// console.log("hello world");
// console.error("this is an error");
// console.warn("this is an warning");

//variables : var(obsolete,since globally scoped), let(use when you know your value will change), const(mostly used)
// let age = 30 ;
// age = 69;
// console.log(age);

// const age2 = 23;
// age2 =70 ; //error
// console.log(age2);

//strings, numbers, boolean, null , undefined 
const username = "sridhar sahu";
const age = 19;
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;//also undefined

// //check datatypes 
// console.log(typeof username);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof iscool);
// console.log(typeof x,y,z);

//concatenation(old way)
const text ="my name is "+username+" and i am "+age+" years old";
console.log(text);
//concatenation(template string = ``)
console.log(`my nmae is ${username} and i am ${age} years old`);

//PROPERTIES - DO NOT HAVE PARENTHESIS, METHODS HAVE THEM
console.log(text.length);
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());
console.log(text.substring(0,5));
console.log(text.split(" "));//split string to array 

//arrays
const numbers = new Array(1,2,3,4,5,6);//using constructor
const fruits = ['apples' ,' banana', 'grapes'];
fruits[3]=  'guava';
console.log(numbers);
console.log(fruits);
fruits.pop();//removes last ele in arr.
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('grapes'))

//object  literals = are key -val pairs
const person ={
    fname: "sridhar",
    lname:'sahu',
    age : 19,
    hobbies: ['badminton','science','music'],
    //embeded obj = obj in obj
    address :{
        city :'bbsr',
        area :'patia',
        pincode : 12356,
    }
}
console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city);

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
console.log(incompletedTasks);

// == vs === (always used)
const x ='10';
if(x==10){//doesnt compare dtype
    console.log("hello world")
}
if(x===10){//compares dtype as well
    console.log("hello world")
}else{
    console.log("not HELLO WORLD")
}

//ternary operator
const num = 10;
const color = (num>5)?"green":"red"
console.log(color)
//switch-case
switch(color){
    case 'green':
        console.log("its green again")
        break;
    case 'red':
        console.log("its red again")
    default :
        console.log("color is not red or green")
}
 
//DATE object
const dob = '5-5-2026'
console.log(dob)
console.log(typeof dob)
const date = new Date(dob)
console.log(date)
console.log(typeof date)








