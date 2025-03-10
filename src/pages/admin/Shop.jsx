import { shopApi } from "../../redux/api/shopApi";
import { ToastContainer, Zoom, toast } from "react-toastify";
import Overlay from "../../components/Overlay";
import FormAdd from "../../components/admin/FormAdd";
import Table from "../../components/admin/Table";
import FormEdit from "../../components/admin/FormEdit";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAddForm,
  closeEditForm,
  openAddForm,
  openEditForm,
} from "../../redux/features/storeSlice";

const Shop = () => {
  const { data: categories, isLoading: isLoadingCategory } =
    shopApi.useGetAllCategoryQuery();
  const { data: tags, isLoading: isLoadingTag } = shopApi.useGetAllTagQuery();
  const { data: colors, isLoading: isLoadingColor } =
    shopApi.useGetAllColorQuery();
  const { data: years, isLoading: isLoadingYear } =
    shopApi.useGetAllYearQuery();
  // const [updateCategory] = shopApi.useUpdateCategoryMutation();
  const [deleteCategory] = shopApi.useDeleteCategoryMutation();
  const [deleteTag] = shopApi.useDeleteTagMutation();
  const [deleteColor] = shopApi.useDeleteColorMutation();
  const [deleteYear] = shopApi.useDeleteYearMutation();

  const dispatch = useDispatch();
  const { addType, editType, dataEdit } = useSelector((state) => state.store);

  const handleAdd = (type) => {
    dispatch(openAddForm(type));
  };

  const handleCloseAddFrom = () => {
    dispatch(closeAddForm());
  };

  const handleCloseEditFrom = () => {
    dispatch(closeEditForm());
  };

  const showToast = (message, type) => {
    toast[type](message);
  };

  const handleEdit = (type, item) => {
    dispatch(openEditForm({ type, item }));
  };

  // const handleUpdate = async () => {};

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
    switch (type) {
      case "category": {
        try {
          const response = await deleteCategory(id).unwrap();
          toast.success(response.message);
        } catch (error) {
          toast.error(error.data.message);
        }
        break;
      }
      case "tag": {
        try {
          const response = await deleteTag(id).unwrap();
          toast.success(response.message);
        } catch (error) {
          toast.error(error.data.message);
        }
        break;
      }
      case "color": {
        try {
          const response = await deleteColor(id).unwrap();
          toast.success(response.message);
        } catch (error) {
          toast.error(error.data.message);
        }
        break;
      }
      case "year": {
        try {
          const response = await deleteYear(id).unwrap();
          toast.success(response.message);
        } catch (error) {
          toast.error(error.data.message);
        }
        break;
      }
      default:
        return;
    }
  };

  if (isLoadingCategory || isLoadingTag || isLoadingColor || isLoadingYear)
    return <div className="text-xl font-semibold">Loading...</div>;

  return (
    <div className=" p-4 overflow-x-auto w-full">
      <h2 className="text-2xl font-bold mb-6">Shop Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Table
          title="Categories"
          data={categories?.data}
          columns={[{ key: "name", label: "Name" }]}
          onAdd={() => handleAdd("category")}
          onEdit={(item) => handleEdit("category", item)}
          onDelete={(id) => handleDelete("category", id)}
        />
        <Table
          title="Tags"
          data={tags?.data.map((item) => ({
            ...item,
            categoryId: categories?.data.find((c) => c.id === item.categoryId)
              ?.name,
          }))}
          columns={[
            { key: "name", label: "Name" },
            { key: "categoryId", label: "Category" },
          ]}
          onAdd={() => handleAdd("tag")}
          onEdit={(item) => handleEdit("tag", item)}
          onDelete={(id) => handleDelete("tag", id)}
        />
        <Table
          title="Colors"
          data={colors?.data}
          columns={[{ key: "name", label: "Name" }]}
          onAdd={() => handleAdd("color")}
          onEdit={(item) => handleEdit("color", item)}
          onDelete={(id) => handleDelete("color", id)}
        />
        <Table
          title="Years"
          data={years?.data}
          columns={[{ key: "name", label: "Name" }]}
          onAdd={() => handleAdd("year")}
          onEdit={(item) => handleEdit("year", item)}
          onDelete={(id) => handleDelete("year", id)}
        />
      </div>
      <ToastContainer />
      <Overlay isOpen={!!addType} isSetting={true}>
        <FormAdd
          type={addType}
          onClose={handleCloseAddFrom}
          showToast={showToast}
        />
      </Overlay>
      <Overlay isOpen={!!editType} isSetting={true}>
        <FormEdit
          type={editType}
          data={dataEdit}
          onClose={handleCloseEditFrom}
          showToast={showToast}
        />
      </Overlay>
    </div>
  );
};

export default Shop;
