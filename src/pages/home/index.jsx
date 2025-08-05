import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/features/userSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl text-center font-bold mb-4">User</h1>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-yellow-200">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Action</th>
         
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2 text-center">
                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-[20px]">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
           ""
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
