const add = document.querySelector('#add');
const listContainer = document.querySelector(".listContainer");

// Initialize the list either from localStorage or as an empty array
let list = JSON.parse(localStorage.getItem("todoList")) || [];

// Function to render the todo list
function renderList() {
  // Clear the current list
  listContainer.innerHTML = '';

  // Create the div for each todo
  list.forEach((todo, index) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoContainer'); // Add class

    // Create the p element for the todo text
    const todoText = document.createElement('p');
    todoText.textContent = todo;

    // Create the delete button
    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = '🗑️';  // Trash can icon
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
      deleteTodo(index); // Call delete function on click
    });

    // Append the todo and delete button to the todoDiv
    todoDiv.appendChild(todoText);
    todoDiv.appendChild(deleteBtn);

    // Append the todoDiv to the listContainer
    listContainer.appendChild(todoDiv);
  });
}

// Function to add a new todo
add.addEventListener('click', () => {
  const todoInput = document.querySelector('#todo');
  const todo = todoInput.value.trim();  // Get the input value and trim whitespace

  if (todo !== '') {
    list.push(todo); // Add new todo to the list
    localStorage.setItem("todoList", JSON.stringify(list)); // Save to localStorage
    renderList(); // Re-render the list
  }

  todoInput.value = ''; // Clear the input field after adding
});

// Function to delete a todo
function deleteTodo(index) {
  list.splice(index, 1); // Remove the todo from the list
  localStorage.setItem("todoList", JSON.stringify(list)); // Update localStorage
  renderList(); // Re-render the list
}

// Initial render when the page loads
renderList();
