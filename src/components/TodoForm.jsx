import { useState } from 'react';

const TodoForm = ({ initialData = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [status, setStatus] = useState(initialData.status || 'pending');
  const [image, setImage] = useState(initialData.image || '');
  const [error, setError] = useState('');

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader(); // converting into base64 string
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    onSubmit({ title, description, status, image });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={submit}
        className="bg-gray-800 p-6 rounded-xl shadow max-w-xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-100">
          {initialData.title ? 'Edit Todo' : 'Create Todo'}
        </h2>

        {error && (
          <p className="text-red-400 text-center bg-red-900/20 p-2 rounded">
            {error}
          </p>
        )}

        <input
          className="w-full bg-gray-800 text-gray-100 border border-gray-700 p-2 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full bg-gray-800 text-gray-100 border border-gray-700 p-2 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="w-full bg-gray-800 text-gray-100 border border-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <input
          type="file"
          onChange={handleImage}
          className="mt-1 block w-full text-sm text-gray-300 hover:file:bg-gray-600"
        />

        {image && (
          <div className="flex justify-center">
            <img
              src={image}
              className="h-32 object-cover rounded mx-auto border border-gray-700"
              alt="Todo Preview"
            />
          </div>
        )}

        <button className="w-full bg-gray-700 text-gray-100 py-2 rounded hover:bg-gray-600 transition">
          {initialData.title ? 'Update Todo' : 'Save Todo'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
