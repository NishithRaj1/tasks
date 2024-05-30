function addTask() {
    var taskInput = document.querySelector("#addtasks input[type='text']"); // Selecting the input field
    var taskText = taskInput.value.trim(); // Trim to remove leading/trailing whitespace
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.textContent = "- " + taskText;
        taskList.appendChild(listItem);
        taskInput.value = ""; // Clear the input field after adding the task
    } else {
        alert("Please enter a task.");
    }
}




