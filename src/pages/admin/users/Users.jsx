import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateRoleUserMutation,
} from "../../../redux/api/usersApi";
import { ToastContainer, Zoom, toast } from "react-toastify";
import { useState } from "react";

const Users = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const [updateRoleUser] = useUpdateRoleUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [editUserId, setEditUserId] = useState(null);

  const handleDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div className="text-center">
          <p>Are you sure you want to delete this user?</p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => confirmDelete(id, closeToast)}
            >
              Delete
            </button>
            <button
              className="bg-gray-300  px-3 py-1 rounded hover:bg-gray-400"
              onClick={closeToast}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { transition: Zoom, autoClose: false, position: "top-center" }
    );
  };

  const confirmDelete = async (id, closeToast) => {
    closeToast();
    try {
      const response = await deleteUser(id).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const handleEditRole = (id) => {
    setEditUserId(id);
  };

  const handleUpdateRole = async (id, role) => {
    try {
      const response = await updateRoleUser({ id, role }).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  if (isLoading) return <div className="text-xl font-semibold">Loading...</div>;

  return (
    <>
      <div className="p-4 overflow-x-auto w-full">
        <h4 className="text-xl font-semibold mb-6">User Management</h4>
        <h4 className="text-xl font-semibold">User</h4>
        <p className="flex items-center mb-4">Total: {data.data.length} </p>
        <table className="table-auto w-full border shadow-md ">
          <thead>
            <tr className="bg-gray-200 ">
              <th className="border px-4 py-2 text-center w-16">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Phone Number</th>
              <th className="border px-4 py-2 text-left">Address</th>
              <th className="border px-4 py-2 text-left">Role</th>
              <th className="border px-4 py-2 text-center">Setting</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.phoneNumber}</td>
                <td className="border px-4 py-2">{user.address}</td>
                <td className="border px-4 py-2">
                  {editUserId === user.id ? (
                    <select
                      defaultValue={user.role}
                      onChange={(e) =>
                        handleUpdateRole(user.id, e.target.value)
                      }
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="border px-4 py-2 text-center ">
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() =>
                        editUserId === user.id
                          ? setEditUserId(null)
                          : handleEditRole(user.id)
                      }
                      className="text-blue-300 hover:text-blue-500 hover:scale-110 transition mr-2 "
                    >
                      <RiEdit2Fill size={24} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-300 hover:text-red-500 hover:scale-110 transition "
                    >
                      <RiDeleteBin5Fill size={24} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </>
  );
};

export default Users;
