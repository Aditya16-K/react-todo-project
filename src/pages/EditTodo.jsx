import { useParams, useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import { getTodoById, updateTodo } from '../services/api';

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = getTodoById(Number(id));

  const handleSubmit = (data) => {
    updateTodo({ ...todo, ...data });
    navigate('/todos');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
      <TodoForm initialData={todo} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditTodo;
