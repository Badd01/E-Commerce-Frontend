import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateRoleUserMutation,
} from "../../redux/api/usersApi";
import { ToastContainer, Zoom, toast } from "react-toastify";
import { useSelector } from "react-redux";

const Users = () => {
  const user = useSelector((state) => state.auth.user);
  const { data, isLoading: isLoadingUser } = useGetAllUserQuery();
  const { updateRoleUser } = useUpdateRoleUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  if (isLoadingUser) return <p>Loading...</p>;

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
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
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
      console.log(response);
      toast.success(response.message);
    } catch (err) {
      toast.error(err.data?.message || "Error deleting user");
    }
  };

  const handleEdit = (id, role) => {
    try {
      console.log(id, role);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="p-4 w-full overflow-x-auto">
        <p>Total Users: {data.data?.length}</p>
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-md ">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2 text-center w-16">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Phone Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Address
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Role
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Setting
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.phoneNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.role}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleEdit(user.id, user.role)}
                    className="text-blue-300 hover:text-blue-500 hover:scale-110 transition mr-2"
                  >
                    <RiEdit2Fill size={24} />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-300 hover:text-red-500 hover:scale-110 transition"
                  >
                    <RiDeleteBin5Fill size={24} />
                  </button>
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
