
//NEW CODE FAM

let form = document.getElementById("submitname");
let savanamebutton = document.getElementById("savename");
let username = document.getElementById("username");
let formtodo = document.getElementById("todoform");

submitusername = () => {
  //   alert(username);
  localStorage.setItem("name", username.value);
};

getusername = () => {
  localstorageusername.innerHTML = localStorage.getItem("name");
  const currentTime = new Date().getHours();
  let greeting = "";
  if (currentTime < 12) {
    greeting = "Good morning!";
  } else if (currentTime < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  document.getElementById("greetings").textContent = greeting;
};

removetodo = () => {
  localStorage.removeItem("name");
};

displaytodo = () => {
  //   alert("we are here");
  //   todos = localStorage.getItem("todolist");
  //   let tasks = JSON.parse(localStorage.getItem("todolist")) || [];
  //   alert(tasks);
  //   console.log(tasks);

  //   document.addEventListener("DOMContentLoaded", function() {
  const taskList = document.getElementById("shedrow");

  // Load tasks from localStorage or initialize an empty array
  let tasks = JSON.parse(localStorage.getItem("todolist")) || [];
  console.log(tasks);

  // Display tasks in the task-list section
  function displayTasks() {
    taskList.innerHTML = ""; // Clear previous content

    tasks.forEach((task, index) => {
      const row = document.createElement("tr");
      row.classList.add("task-row");
      row.innerHTML = `
                <td>${index + 1}</td>
                <td>${task.category}</td>
                <td>${task.taskname}</td>
                <td>${task.data}</td>
                <td>${task.time}</td>
                <td><button class="edit-btn  btn btn-primary" data-index="${index} data-toggle="modal" data-target="#myModal" type="button" >Edit</button></td>
                <td><button class="delete-btn btn btn-danger" data-index="${index}">Delete</button></td>
            `;

      taskList.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    const editButtons = document.querySelectorAll(".edit-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    editButtons.forEach((button) => {
      button.addEventListener("click", editTask);
    });

    deleteButtons.forEach((button) => {
      button.addEventListener("click", deleteTask);
    });
  }

  function editTask(event) {
    // alert("edit");
    const index = event.target.getAttribute("data-index");
    const editedTask = tasks[index]; // Get the task to edit
    // Implement editing logic here (e.g., show a form to edit task details)
    // alert(editedTask);
    // console.log(editedTask);
  }

  function deleteTask(event) {
    const index = event.target.getAttribute("data-index");
    tasks.splice(index, 1); // Remove the task from the array
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    displayTasks(); // Refresh the display
  }

  function toggleTaskStatus(event) {
    const index = event.target.getAttribute("data-index");
    tasks[index].done = event.target.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    displayTasks(); // Refresh the display
  }

  displayTasks();

  //   ggg = Array.from(todos);
  //   ggg = [todos];
  //   hhh = typeof ggg;
  //   yyy = typeof todos;
  //   console.log(yyy);
  //   console.log(hhh);
  //   console.log(ggg.taskname);
  //   const propertyValues = Object.values(todos);
  //   console.log(propertyValues);
  //   alert("here");
  //   alert(Object.entries(ggg).length);
  //   //   length;
  //   for (row = 0; (row = ggg.length); row++) {
  //     tr = document.createElement("tr");
  //     for (cell = 0; (cell = ggg.length); cell++) {
  //       td = document.createElement("td");
  //       tr.appendChild(td);
  //       td.innerHTML = row * 22 + cell + 1;
  //     }
  //     table.appendChild(tr);
  //   }
  //   return ggg;
};

// formtodo.addEventListener("submit", (e) => {
//   alert("We are here");
//   e.preventDefault();
//   let newtodo = [];
//   let fd = new FormData(formtodo);
//   let obj = Object.fromEntries(fd);
//   console.log(obj);
//   //   json = JSON.stringify(obj);
//   let oldtodo = JSON.parse(localStorage.getItem("todolist")) || [];
//   console.log(oldtodo);
//   //   console.log(json);
//   //   console.log(oldtodo);
//   //   newtodo.push(oldtodo);
//   //   newtodo.push(obj);
//   //    = { oldtodo, json };
//   //   oldtodo.push(json);
//   //   newtodo = JSON.stringify(oldItems);
//   newtodo = [oldtodo, obj];
//   console.log(newtodo);
//   localStorage.setItem("todolist", newtodo);
// });

changecolor = () => {};

formtodo.addEventListener("submit", (e) => {
  //   alert("We are here");
  e.preventDefault();
  let newtodo = [];
  let fd = new FormData(formtodo);
  let obj = Object.fromEntries(fd);
  //   console.log(obj);

  var oldtodo = JSON.parse(localStorage.getItem("todolist")) || [];
  //   console.log(oldtodo);

  let mergedTodo = oldtodo.concat([obj]);
  //   console.log(mergedTodo);
  //   console.log(typeof mergedTodo);

  localStorage.setItem("todolist", JSON.stringify(mergedTodo));
  alert("Todo has been submitted");
});

greet = () => {
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;
  if (isDayTime === true) {
    document.write("day");
  } else {
    document.write("night");
  }
};