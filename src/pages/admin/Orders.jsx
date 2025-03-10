import { RiEditBoxLine } from "react-icons/ri";

const Orders = () => {
  return (
    <>
      <div className="p-4  overflow-xauto">
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
              <th className="border border-gray-300 px-4 py-2 text-center">
                Total Orders
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">
                1
              </td>
              <td className="border border-gray-300 px-4 py-2">
                The Sliding Mr. Bones
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Malcolm Lockyer
              </td>
              <td className="border border-gray-300 px-4 py-2">1961</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                14
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="text-blue-500 hover:text-blue-700">
                  <RiEditBoxLine size={24} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
