import { ToastContainer, Zoom, toast } from "react-toastify";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../redux/api/productsApi";
import Overlay from "../../../components/Overlay";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import FormAddProduct from "./FormAddProduct";
import FormEditProduct from "./FormEditProduct";
import {
  closeAddForm,
  closeEditForm,
  openAddForm,
  openEditForm,
} from "../../../redux/features/productsSlice";
import { useState } from "react";

const Products = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const { data, isLoading, error } = useGetProductsQuery({
    page,
    sortBy,
    sortOrder,
  });
  const [deleteProduct] = useDeleteProductMutation();

  const { addForm, editForm, dataEdit } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();
  const showToast = (message, type) => {
    toast[type](message);
  };

  const handleDelete = (slug) => {
    toast(
      ({ closeToast }) => (
        <div className="mx-auto">
          <p>Are you sure you want to delete ?</p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => confirmDelete(slug, closeToast)}
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

  const confirmDelete = async (slug, closeToast) => {
    try {
      const response = await deleteProduct(slug).unwrap();
      showToast(response.message, "success");
    } catch (error) {
      showToast(error.data.message, "error");
    }
    closeToast();
  };

  if (isLoading) return <p className="text-xl font-semibold">Loading...</p>;
  if (error)
    return <p className="text-xl font-semibold">Error loading products!</p>;

  return (
    <div className=" p-4 overflow-x-auto w-full">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <h4 className="text-xl font-semibold">Products</h4>
      <p className="flex items-center font-medium">Total: {data?.pagination.totalItems}</p>
      <button
        onClick={() => dispatch(openAddForm())}
        className="bg-dark-2 px-2 py-1 mb-4 rounded text-white hover:scale-105 transition"
      >
        Add new
      </button>

      <div className="flex items-center gap-2 mb-4">
        <label className="font-medium">Sort by: </label>
        <select className="border rounded px-2 py-1"   value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="createdAt">Created At</option>
        </select>
        <button className="border rounded px-2 py-1"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "▲" : "▼"}
        </button>
      </div>

      <table className="table-auto w-full border text-center shadow-md ">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="border px-4 py-2 ">ID</th>
            <th className="border px-4 py-2 ">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price ($)</th>
            <th className="border px-4 py-2 ">Stock</th>
            <th className="border px-4 py-2 ">Category</th>
            <th className="border px-4 py-2">Tag</th>
            <th className="border px-4 py-2 ">Color</th>
            <th className="border px-4 py-2 ">Year</th>
            <th className="border px-4 py-2">Setting</th>
          </tr>
        </thead>

        <tbody>
          {data?.data.map((item, index) => (
            <tr key={item.products.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2 ">{index + 1 + (page - 1) * 10}</td>
              <td className="border px-4 py-2">
                <img
                  src={item.product_images.imageUrl}
                  className="max-w-48 mx-auto max-h-48 object-cover"
                  alt="Image product"
                />
              </td>
              <td className="border px-4 py-2">{item.products.name}</td>
              <td className="border px-4 py-2">{item.products.price}</td>
              <td className="border px-4 py-2">{item.products.stock}</td>
              <td className="border px-4 py-2">{item.categories.name}</td>
              <td className="border px-4 py-2">{item.tags.name}</td>
              <td className="border px-4 py-2">{item.colors.name}</td>
              <td className="border px-4 py-2">{item.years.name}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => dispatch(openEditForm(item))}
                    className="text-blue-300 hover:text-blue-500 hover:scale-110 transition mr-2 "
                  >
                    <RiEdit2Fill size={24} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.products.id)}
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

      <div className="flex items-center justify-center gap-2 mt-4">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="bg-dark-2 px-2 py-1 rounded text-white hover:scale-105 transition">
          Prev
        </button>
        <span className="font-medium"> Page {page} of {data?.pagination?.totalPages} </span>
        <button  disabled={page >= data?.pagination?.totalPages} onClick={() => setPage(page + 1)} className="bg-dark-2 px-2 py-1 rounded text-white hover:scale-105 transition">
          Next
        </button>
      </div>

      <ToastContainer />

      <Overlay isOpen={!!addForm} isSetting={true}>
        <FormAddProduct
          isForm={addForm}
          onClose={() => dispatch(closeAddForm())}
          showToast={showToast}
        />
      </Overlay>

      <Overlay isOpen={editForm} isSetting={true}>
        <FormEditProduct
          isForm={editForm}
          dataEdit={dataEdit}
          onClose={() => dispatch(closeEditForm())}
          showToast={showToast}
        />
      </Overlay>
    </div>
  );
};

export default Products;
