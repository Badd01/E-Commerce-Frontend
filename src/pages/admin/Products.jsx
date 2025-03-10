import { ToastContainer, Zoom, toast } from "react-toastify";
import Table from "../../components/admin/Table";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  // useUpdateProductMutation,
} from "../../redux/api/productsApi";
import Overlay from "../../components/Overlay";
import FormAdd from "../../components/admin/FormAdd";
import FormEdit from "../../components/admin/FormEdit";
import { useState } from "react";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  // const [updateProduct] = useUpdateProductMutation();
  const [addType, setAddType] = useState(null);
  const [editType, setEditType] = useState(null);
  const [dataEdit, setDataEdit] = useState(null);

  const handleOpen = (type) => {
    setAddType(type);
  };

  const handleClose = () => {
    setAddType(null);
    setEditType(null);
    setDataEdit(null);
  };

  const showToast = (message, type) => {
    toast[type](message);
  };

  const handleEdit = (type, item) => {
    setEditType(type);
    setDataEdit(item);
  };

  const handleDelete = (type, id) => {
    toast(
      ({ closeToast }) => (
        <div className="text-center">
          <p>Are you sure you want to delete this {type}?</p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => confirmDelete(type, id, closeToast)}
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

  const confirmDelete = async (type, id, closeToast) => {
    closeToast();
    if (type === "product") {
      try {
        const response = await deleteProduct(id).unwrap();
        showToast(response.message, "success");
      } catch (error) {
        showToast(error.data.message, "error");
      }
    }
  };

  if (isLoading) return <div className="text-xl font-semibold">Loading...</div>;

  return (
    <div className=" p-4 overflow-x-auto w-full">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>

      <Table
        title="Products"
        data={products.data}
        columns={[
          { key: "name", label: "Name" },
          { key: "image", label: "Image" },
          { key: "description", label: "Description" },
          { key: "price", label: "Price" },
          { key: "stock", label: "Stock" },
          { key: "categoryId", label: "Category" },
          { key: "tagId", label: "Tag" },
          { key: "colorId", label: "Color" },
          { key: "yearId", label: "Year" },
        ]}
        onAdd={() => handleOpen("product")}
        onEdit={(item) => handleEdit("product", item)}
        onDelete={(id) => handleDelete("product", id)}
      />

      <ToastContainer />
      <Overlay isOpen={!!addType} isSetting={true}>
        <FormAdd type={addType} onClose={handleClose} showToast={showToast} />
      </Overlay>
      <Overlay isOpen={!!editType} isSetting={true}>
        <FormEdit
          type={editType}
          data={dataEdit}
          onClose={handleClose}
          showToast={showToast}
        />
      </Overlay>
    </div>
  );
};

export default Products;
