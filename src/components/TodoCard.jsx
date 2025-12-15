import { Link } from 'react-router-dom';

const TodoCard = ({ todo, onDelete }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-md p-4 flex flex-col justify-between w-full max-w-sm">
      {/* Image */}
      {todo.image ? (
        <img
          src={todo.image}
          className="h-40 w-full object-cover rounded-md mb-3 border border-gray-700"
        />
      ) : (
        <div className="h-40 w-full flex items-center justify-center bg-gray-800 text-gray-400 rounded-md mb-3 border border-gray-700">
          No Image
        </div>
      )}

      {/* Title & Status */}
      <div className="mb-2 flex justify-between items-center">
        <h3 className="text-gray-100 font-bold text-lg">{todo.title}</h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full capitalize
            ${
              todo.status === 'completed'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-red-700'
            }`}
        >
          {todo.status}
        </span>
      </div>

      {/* Description */}
      {todo.description && (
        <div className="text-gray-300 text-sm max-h-20 overflow-y-auto p-1 mb-4 border border-gray-700 rounded">
          {todo.description}
        </div>
      )}

      {/* Actions */}
      <div className="mt-auto flex gap-2">
        <Link
          to={`/todos/${todo.id}/edit`}
          className="flex-1 text-center bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
        >
          Edit
        </Link>
        <button
          onClick={() => {
            onDelete(todo.id);
          }}
          className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
