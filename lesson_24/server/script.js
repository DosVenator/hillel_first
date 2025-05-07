import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let todos = [];
let nextId = 1;

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  const newTodo = { id: nextId++, text };
  todos.push(newTodo);
  res.status(201).json(newTodo); 
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.sendStatus(204); 
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;

  const todo = todos.find(todo => todo.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  todo.text = text;
  res.json(todo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});