const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, i) => {
    const li = document.createElement('li');
    // Style the block
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.background = '#f8f9fa';
    li.style.padding = '8px 12px';
    li.style.margin = '8px 0';
    li.style.borderRadius = '6px';
    li.style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)';

    const textSpan = document.createElement('span');
    textSpan.textContent = todo;

    const btnContainer = document.createElement('span');

    // Update button
    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.style.marginRight = '8px';
    updateBtn.onclick = () => {
      const newTodo = prompt('Edit todo:', todo);
      if (newTodo !== null && newTodo.trim() !== '') {
        todos[i] = newTodo.trim();
        renderTodos();
      }
    };

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      todos.splice(i, 1);
      renderTodos();
    };

    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(delBtn);

    li.appendChild(textSpan);
    li.appendChild(btnContainer);
    todoList.appendChild(li);
  });
}

todoForm.onsubmit = e => {
  e.preventDefault();
  if (todoInput.value.trim() !== '') {
    todos.push(todoInput.value.trim());
    renderTodos();
    todoInput.value = '';
  }
};