// Select elements (DOM selection)
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Event: button click
button.addEventListener("click", function () {
  
  // Get input value
  const task = input.value;

  // Create new list item
  const li = document.createElement("li");
  li.textContent = task;

  // Add click event to mark complete
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  // Add to list
  list.appendChild(li);

  // Clear input
  input.value = "";
});
