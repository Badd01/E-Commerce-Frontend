import { RiCloseFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import {
  useUpdateCategoryMutation,
  useUpdateColorMutation,
  useUpdateTagMutation,
  useUpdateYearMutation,
  useGetAllCategoryQuery,
} from "../../redux/api/shopApi";
const FormEdit = ({ type, data, onClose, showToast }) => {
  const [name, setName] = useState(data?.name || "");
  const [categoryId, setCategoryId] = useState("");
  const { data: categories } = useGetAllCategoryQuery();
  const [updateCategory, { isLoading: isLoadingCategory }] =
    useUpdateCategoryMutation();
  const [updateTag, { isLoading: isLoadingTag }] = useUpdateTagMutation();
  const [updateColor, { isLoading: isLoadingColor }] = useUpdateColorMutation();
  const [updateYear, { isLoading: isLoadingYear }] = useUpdateYearMutation();
  useEffect(() => {
    setName(data?.name || "");
    if (data?.categoryId) {
      const foundCategory = categories?.data.find(
        (category) => category.name === data.categoryId
      );
      setCategoryId(foundCategory ? foundCategory.id : "");
    } else {
      setCategoryId("");
    }
  }, [data, categories]);
  const handleEdit = async () => {
    switch (type) {
      case "category": {
        try {
          const response = await updateCategory({
            name,
            id: data.id,
          }).unwrap();
          showToast(response.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      case "tag": {
        try {
          const response = await updateTag({
            name,
            categoryId,
            id: data.id,
          }).unwrap();
          showToast(response.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      case "color": {
        try {
          const response = await updateColor({ name, id: data.id }).unwrap();
          showToast(response.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      case "year": {
        try {
          const response = await updateYear({ name, id: data.id }).unwrap();
          showToast(response.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      default:
        return;
    }
  };
  return (
    <div
      className={`flex bg-white rounded-md  flex-col transition-transform duration-500 w-[350px]  ${
        type ? " translate-x-0" : " translate-x-full"
      }`}
    >
      <div className="p-4 mt-2">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Edit {type}</h4>
          <button
            onClick={onClose}
            className="hover:scale-115 transition-all duration-300  bg-black hover:bg-red-500 rounded-sm p-1 text-white"
          >
            <RiCloseFill />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor={`name-${type}`} className="font-semibold mb-1">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border p-3"
              type="text"
              id={`name-${type}`}
              name={`name-${type}`}
              value={name}
              placeholder="Enter name"
              required
            />
          </div>
          {type === "tag" && (
            <div className="flex flex-col">
              <select
                className="rounded-lg border p-3"
                name="categoryId"
                id="categoryId"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories?.data.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex flex-col">
            <button
              onClick={handleEdit}
              className="bg-dark text-white text-xl py-3 rounded-xl font-semibold  hover:scale-105 transition-all duration-500  disabled:opacity-50 disabled:bg-dark-2 disabled:text-gray-400"
              disabled={
                isLoadingCategory ||
                isLoadingTag ||
                isLoadingColor ||
                isLoadingYear
              }
            >
              {isLoadingCategory ||
              isLoadingTag ||
              isLoadingColor ||
              isLoadingYear
                ? "Editing..."
                : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
