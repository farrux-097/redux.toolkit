import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/features/aboutSlice';

const About = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.about);

  const [form, setForm] = useState({ name: '', age: '', profession: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.age && form.profession) {
      dispatch(addUser(form));
      setForm({ name: '', age: '', profession: '' });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl text-center font-bold mb-4">User</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input  type="text"  placeholder="Name"  className="border p-2 w-full"  value={form.name}  onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input
          type="number"
          placeholder="Age"
          className="border p-2 w-full"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })} />
        <input  type="text"  placeholder="Profession"  className="border p-2 w-full"  value={form.profession}  onChange={(e) => setForm({ ...form, profession: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          submit
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">User List</h3>
      <div className="w-full flex items-center   gap-4">
        {users.map((user, index) => (
          <div key={index} className="border p-3 rounded shadow">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Profession:</strong> {user.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
