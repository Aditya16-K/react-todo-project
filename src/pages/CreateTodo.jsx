import { useNavigate } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../services/api';

const CreateTodo = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addTodo({ id: Date.now(), ...data });
    navigate('/todos');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
      <TodoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTodo;
