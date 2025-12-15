const KEY = 'todos'; //storage name

export const getTodos = () => JSON.parse(localStorage.getItem(KEY)) || [];

export const saveTodos = (todos) =>
  localStorage.setItem(KEY, JSON.stringify(todos));

export const addTodo = (todo) => {
  const todos = getTodos();
  saveTodos([...todos, todo]);
};

export const deleteTodo = (id) => {
  saveTodos(getTodos().filter((t) => t.id !== id));
};

export const getTodoById = (id) => getTodos().find((t) => t.id === id);

export const updateTodo = (todo) => {
  saveTodos(getTodos().map((t) => (t.id === todo.id ? todo : t)));
};
