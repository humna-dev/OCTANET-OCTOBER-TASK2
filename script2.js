const addingForm = document.getElementById("addingForm");
const mainList = document.getElementById("mainList");

addingForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const taskInput = addingForm.querySelector("input[type=text]");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex align-items-center";

    const taskContent = document.createElement("span");
    taskContent.innerText = taskText;
    taskContent.style.flex = "1"; // Expand to fill available space
    listItem.appendChild(taskContent);

    // Delete Icon
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt ml-2";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.style.color = "green"; // Set icon color to green
    deleteIcon.style.animation = "slideFromRight 0.5s ease-in-out"; // Add slide animation
    deleteIcon.addEventListener("click", function() {
      // Remove the parent list item when the delete icon is clicked
      listItem.remove();
    });

    // Checkmark Icon
    const checkmarkIcon = document.createElement("i");
    checkmarkIcon.className = "fas fa-check-circle text-success ml-2";
    checkmarkIcon.style.cursor = "pointer";
    checkmarkIcon.style.color = "green"; // Set icon color to green
    checkmarkIcon.style.animation = "slideFromRight 0.5s ease-in-out"; // Add slide animation
    checkmarkIcon.addEventListener("click", function() {
      // Toggle strikethrough style on task content
      taskContent.style.textDecoration = taskContent.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    listItem.appendChild(checkmarkIcon);
    listItem.appendChild(deleteIcon);

    mainList.appendChild(listItem);

    taskInput.value = "";
  }
});