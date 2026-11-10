let todos = [
  {
    id: "1",
    title: "demo title",
    completed: false,
  },
];

const getAllTodos = (req, res) => {
  return res.status(200).json({ message: "hello world", data: todos });
};

const addTodo = (req, res) => {
  const { title } = req.body;

  if (title === "" || title == undefined || title === null) {
    return res.status(503).json({ message: "required." });
  }

  const todo = {
    id: crypto.randomUUID() ? crypto.randomUUID() : new Date().toString(),
    title: title,
    completed: false,
  };

  todos.push(todo);

  return res
    .status(200)
    .json({ message: "todo added successfully", data: todos });
};

const updateTodo = (req, res) => {
  const { completed, title } = req.body;
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === id);

  todo.title = title;
  todo.completed = completed;

  return res
    .status(200)
    .json({ message: "todo updated successfully", data: todo });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  todos = filteredTodos;
  return res.status(200).json({ message: "hello world", data: filteredTodos });
};

export { getAllTodos, addTodo, updateTodo, deleteTodo };
