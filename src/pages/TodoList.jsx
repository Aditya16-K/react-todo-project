import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoCard from '../components/TodoCard';
import { getTodos, deleteTodo } from '../services/api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Delete this todo?')) {
      deleteTodo(id);
      setTodos(getTodos());
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-200">My Todos</h1>
        <Link
          to="/todos/create"
          className="bg-gray-200  text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white hover:duration-400"
        >
          + Create Todo
        </Link>
      </div>

      {todos.length === 0 ? (
        <p className="text-gray-200">No todos found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
