const API_URL = 'http://localhost:3000/todos';
const ol = document.querySelector('.ol');
const input = document.querySelector('.form-control');

document.querySelector('.btn-primary').addEventListener('click', async () => {
  ol.innerHTML = '';
  const response = await fetch(API_URL);
  const todos = await response.json();
  todos.forEach(renderTodo);
});

document.querySelector('.input-group').addEventListener('click', async (event) => {
  if (event.target === document.querySelector('.btn-success')) {
    const text = input.value.trim();
    if (!text) return;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const newTodo = await response.json();
    renderTodo(newTodo);
    input.value = '';
  }
});

ol.addEventListener('click', async (event) => {
  const li = event.target.closest('li');
  const id = li?.dataset.id;

  if (event.target.classList.contains('btn-danger')) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    li.remove();
  }

  if (event.target.classList.contains('btn-warning')) {
    const span = li.querySelector('span');
    const oldText = span.textContent;

    li.innerHTML = `
      <input type="text" class="form-control d-inline w-50" value="${oldText}">
      <button class="btn btn-success btn-save">Save</button>
    `;
  }

  if (event.target.classList.contains('btn-save')) {
    const newText = li.querySelector('input').value.trim();
    if (!newText) return;

    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newText })
    });

    li.innerHTML = `
      <span>${newText}</span>
      <button type="button" class="btn btn-danger">Delete</button>
      <button type="button" class="btn btn-warning">Fix</button>
    `;
  }
});

function renderTodo(todo) {
  const li = document.createElement('li');
  li.dataset.id = todo.id;
  li.innerHTML = `
    <span>${todo.text}</span>
    <button type="button" class="btn btn-danger">Delete</button>
    <button type="button" class="btn btn-warning">Fix</button>
  `;
  ol.appendChild(li);
}