// SETUP
let tasks = [];

const input = document.querySelector("#input");
const addbtn = document.querySelector("#addbtn");
const tasklist = document.querySelector("#tasklist");
const priority = document.querySelector("#priority");
const duedate = document.querySelector("#duedate");

// HANDLE EVENTS
addbtn.addEventListener("click", function () {
    const tasktext = input.value;
    const taskpriority = priority.value;
    const taskdate = duedate.value;

    if (tasktext === "") {
        alert("please enter a task ");
        return;
    }

    console.log(tasktext);
    console.log(taskpriority);
    console.log(taskdate);

    const task = {
        text: tasktext,
        priority: taskpriority,
        duedate: taskdate,
        completed: false,
    };

    tasks.push(task);
    console.log(tasks);

    const li = document.createElement("li");
    li.classList.add("taskitem");

    const textspan = document.createElement("span");
    textspan.textContent = tasktext;

    const priorityspan = document.createElement("span");
    priorityspan.classList.add(taskpriority.toLowerCase());
    priorityspan.textContent = taskpriority;

    const datespan = document.createElement("span");
    datespan.textContent = taskdate;

    const deletebtn = document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.textContent = "delete";

    //DELETE FUNCTIONALITY
    const index = tasks.length - 1;

    deletebtn.addEventListener("click", function () {
        tasks.splice(index, 1); // remove from array
        li.remove();            // remove from UI
    });

    li.appendChild(textspan);
    li.appendChild(priorityspan);
    li.appendChild(datespan);
    li.appendChild(deletebtn);

    tasklist.appendChild(li);
});