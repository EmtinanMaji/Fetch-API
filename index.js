
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => {
    if (!response.ok) {
      throw "error";
    }
    return response.json();
  })
  .then(todos => {
    const todoList = document.getElementById('todo-list');

    todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="todo-card ${todo.completed ? 'completed' : 'Incomplete'}">
          <p>${todo.id}</p>
          <h3>${todo.title}</h3>
          <p>User ID: ${todo.userId}</p>
          <p>Status: ${todo.completed ? 'Completed': 'Incomplete'}</p>
        </div>
      `;
      todoList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("error:", error);
  });

