const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Enter a task !!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
           // Create the edit button with a pencil icon
           let editSpan = document.createElement("span");
           let editIcon = document.createElement("i");
           editIcon.className = "fa-solid fa-pencil edit"; // Add Font Awesome classes and 'edit' class
           editSpan.appendChild(editIcon); // Append the icon to the span
           li.appendChild(editSpan); // Append the edit button to the task
   
           listContainer.appendChild(li); // Add the task to the list

        // Create the delete button with the trash icon
        let deleteSpan = document.createElement("span");
        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash delete"; // Add Font Awesome classes and 'delete' class
        deleteSpan.appendChild(deleteIcon); // Append the icon to the span
        li.appendChild(deleteSpan); // Append the delete button to the task

     
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle task completion
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains("delete")) {
        // Delete task
        e.target.parentElement.parentElement.remove(); // Remove the <li>
        saveData();
    } else if (e.target.classList.contains("edit")) {
        // Edit task
        let taskText = e.target.parentElement.parentElement.firstChild.nodeValue.trim();
        let newTask = prompt("Edit your task:", taskText);
        if (newTask !== null && newTask.trim() !== "") {
            e.target.parentElement.parentElement.firstChild.nodeValue = newTask;
            saveData();
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
