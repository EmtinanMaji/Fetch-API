function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours}:${minutes}:${remainingSeconds}`;
}

setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);

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

