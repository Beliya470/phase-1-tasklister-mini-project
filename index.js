// Wait for the DOM content to be loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the form and task list elements
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    // Add an event listener to the form for the submit event
    form.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the task input element and its value
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value;
  
      // Check if the task text is not empty
      if (taskText !== "") {
        // Create a new list item element
        const taskItem = document.createElement("li");
        // Set the inner text of the list item to the task text
        taskItem.innerText = taskText;
        // Append the list item to the task list
        taskList.appendChild(taskItem);
        // Clear the task input value
        taskInput.value = "";
      }
    });
  });
  