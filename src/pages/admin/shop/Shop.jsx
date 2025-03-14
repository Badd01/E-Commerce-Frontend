import { shopApi } from "../../../redux/api/shopApi";
import { ToastContainer, Zoom, toast } from "react-toastify";
import Overlay from "../../../components/Overlay";
import Table from "../../../components/admin/Table";
import { useSelector, useDispatch } from "react-redux";
import FormAddShop from "./FormAddShop";
import FormEditShop from "./FormEditShop";
import {
  closeAddForm,
  closeEditForm,
  openAddForm,
  openEditForm,
} from "../../../redux/features/shopSlice";

const Shop = () => {
  const { data, isLoading } = shopApi.useGetAllShopQuery();
  const [deleteItem] = shopApi.useDeleteItemMutation();
  const { addType, editType, dataEdit } = useSelector((state) => state.shop);

  const dispatch = useDispatch();
  const showToast = (message, type) => {
    toast[type](message);
  };

  // addType
  const handleAdd = (type) => {
    dispatch(openAddForm(type));
  };

  const handleCloseAdd = () => {
    dispatch(closeAddForm());
  };

  //editType & dataEdit
  const handleEdit = (type, item) => {
    dispatch(openEditForm({ type, item }));
  };

  const handleCloseEdit = () => {
    dispatch(closeEditForm());
  };

  const handleDelete = (type, id) => {
    toast(
      ({ closeToast }) => (
        <div className="mx-auto">
          <p>Are you sure you want to delete ?</p>
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
    try {
      const response = await deleteItem({ type, id }).unwrap();
      showToast(response.message, "success");
    } catch (error) {
      showToast(error.data.message.message, "error");
    }
    closeToast();
  };

  if (isLoading) return <div className="text-xl font-semibold">Loading...</div>;
  return (
    <div className=" p-4 overflow-x-auto w-full">
      <h2 className="text-2xl font-bold mb-6">Shop Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Table
          title="Categories"
          data={data?.categories}
          columns={[{ key: "name", label: "Name" }]}
          onAdd={() => handleAdd("categories")}
          onEdit={(item) => handleEdit("categories", item)}
          onDelete={(id) => handleDelete("categories", id)}
        />
        <Table
          title="Tags"
          data={data?.tags.map((item) => ({
            ...item,
            category: data?.categories.find((c) => c.id === item.categoryId)
              .name,
          }))}
          columns={[
            { key: "name", label: "Name" },
            { key: "category", label: "Category" },
          ]}
          onAdd={() => handleAdd("tags")}
          onEdit={(item) => handleEdit("tags", item)}
          onDelete={(id) => handleDelete("tags", id)}
        />
        <Table
          title="Colors"
          data={data?.colors}
          columns={[{ key: "name", label: "Name" }]}
          onAdd={() => handleAdd("colors")}
          onEdit={(item) => handleEdit("colors", item)} //  "item" from Table => handleEdit
          onDelete={(id) => handleDelete("colors", id)}
        />
        <Table
          title="Years"
          data={data?.years}
          columns={[{ key: "name", label: "Name" }]}
          onAdd={() => handleAdd("years")}
          onEdit={(item) => handleEdit("years", item)}
          onDelete={(id) => handleDelete("years", id)}
        />
      </div>
      <ToastContainer />

      <Overlay isOpen={!!addType} isSetting={true}>
        <FormAddShop
          type={addType}
          onClose={handleCloseAdd}
          showToast={showToast}
        />
      </Overlay>

      <Overlay isOpen={!!editType} isSetting={true}>
        <FormEditShop
          type={editType}
          dataEdit={dataEdit}
          onClose={handleCloseEdit}
          showToast={showToast}
        />
      </Overlay>
    </div>
  );
};

export default Shop;
