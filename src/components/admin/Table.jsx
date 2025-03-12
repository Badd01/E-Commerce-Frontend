import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";

const Table = ({ title, data, columns, onAdd, onEdit, onDelete }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="flex items-center">Total: {data?.length}</p>
      <button
        onClick={onAdd}
        className="bg-dark-2 px-2 py-1 mb-4 rounded text-white hover:scale-105 transition"
      >
        Add new
      </button>
      <table className="table-auto w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-center">ID</th>
            {columns.map((col) => (
              <th key={col.key} className="border px-4 py-2 text-center">
                {col.label}
              </th>
            ))}
            <th className="border px-4 py-2 text-center">Setting</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center ">{index + 1}</td>
              {columns.map((col) => (
                <td key={col.key} className="border px-4 py-2 text-center">
                  {col.key === "image" ? (
                    <img
                      src={item[col.key]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md mx-auto"
                    />
                  ) : (
                    item[col.key]
                  )}
                </td>
              ))}
              <td className="border px-4 py-2 ">
                <div className="flex items-center justify-center ">
                  <button
                    className="text-blue-300 hover:text-blue-500 hover:scale-110 transition mr-2"
                    onClick={() => onEdit(item)}
                  >
                    <RiEdit2Fill size={24} />
                  </button>
                  <button
                    className="text-red-300 hover:text-red-500 hover:scale-110 transition"
                    onClick={() => onDelete(item.id)}
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
  );
};

export default Table;
