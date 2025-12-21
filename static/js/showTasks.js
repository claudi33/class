const showTasksBtn = document.getElementById("showTasksBtn");
const taskListContainer = document.getElementById("taskListContainer");

const exampleTasks = [
    "Task 1: Introduction",
    "Task 2: Watch video",
    "Task 3: Complete exercise",
    "Task 4: Quiz",
    "Task 5: Discussion",
    "Task 1: Introduction",
    "Task 2: Watch video",
    "Task 3: Complete exercise",
    "Task 4: Quiz",
    "Task 5: Discussion",
    "Task 3: Complete exercise",
    "Task 4: Quiz",
    "Task 5: Discussion",
    "Task 1: Introduction",
    "Task 2: Watch video",
    "Task 3: Complete exercise",
    "Task 4: Quiz",
];

//? Add tasks dynamically
const taskList = document.getElementById("taskList");
exampleTasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
});

//? Toggle visibility
showTasksBtn.addEventListener("click", () => {
  taskListContainer.classList.toggle("show");
});
