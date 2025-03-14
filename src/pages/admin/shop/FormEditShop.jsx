import { RiCloseFill } from "react-icons/ri";
import { useEffect } from "react";
import { shopApi } from "../../../redux/api/shopApi";
import { setCategoryId, setName } from "../../../redux/features/shopSlice";
import { useDispatch, useSelector } from "react-redux";
const FormEditShop = ({ type, dataEdit, onClose, showToast }) => {
  const { data } = shopApi.useGetAllShopQuery();
  const [updateItem, { isLoading }] = shopApi.useUpdateItemMutation();
  const { name, categoryId } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const handleEdit = async () => {
    if (type === "tags") {
      try {
        // unwrap() returns a promise
        const response = await updateItem({
          type,
          name,
          categoryId,
          id: dataEdit.id,
        }).unwrap();
        showToast(response.message, "success");
      } catch (error) {
        showToast(error?.data.message.message, "error");
      }
      return;
    }

    try {
      const response = await updateItem({
        type,
        name,
        id: dataEdit.id,
      }).unwrap();
      showToast(response.message, "success");
    } catch (error) {
      console.log(error);
      showToast(error.data.message.message, "error");
    }
  };

  useEffect(() => {
    dispatch(setName(dataEdit?.name || ""));
    if (type === "tags") {
      dispatch(setCategoryId(dataEdit?.categoryId || 0));
    }
  }, [type, dispatch, dataEdit]);

  return (
    <div className="flex bg-white rounded-md  flex-col w-[350px]">
      {type && (
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
                onChange={(e) => dispatch(setName(e.target.value))}
                className="rounded-lg border p-3"
                type="text"
                id={`name-${type}`}
                name={`name-${type}`}
                value={name}
                placeholder="Enter name"
                required
              />
            </div>
            {type === "tags" && (
              <div className="flex flex-col">
                <select
                  className="rounded-lg border p-3"
                  name="categoryId"
                  id="categoryId"
                  value={categoryId}
                  onChange={(e) => dispatch(setCategoryId(e.target.value))}
                >
                  <option className="text-gray-400" value={0}>
                    Select category
                  </option>
                  {data.categories.map((category) => (
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
                disabled={isLoading}
              >
                {isLoading ? "Editing..." : "Edit"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormEditShop;
