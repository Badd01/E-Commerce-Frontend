import { RiCloseFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { productsApi } from "../../../redux/api/productsApi";
import { shopApi } from "../../../redux/api/shopApi";
import {
  setCategoryId,
  setName,
  setPrice,
  setStock,
  setDescription,
  setColorId,
  setTagId,
  setImage,
  setYearId,
} from "../../../redux/features/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const FormEditProduct = ({ isForm, dataEdit, onClose, showToast }) => {
  const { data } = shopApi.useGetAllShopQuery();
  const [updateProduct, { isLoading }] = productsApi.useUpdateProductMutation();
  const dispatch = useDispatch();
  const {
    name,
    categoryId,
    price,
    stock,
    description,
    tagId,
    colorId,
    yearId,
    image,
  } = useSelector((state) => state.products);

  const [file, setFile] = useState(null);

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("categoryId", categoryId);
    formData.append("tagId", tagId);
    formData.append("colorId", colorId);
    formData.append("yearId", yearId);
    if (file) {
      formData.append("image", file);
    }
    try {
      const response = await updateProduct({
        id: dataEdit.products.id,
        data: formData,
      }).unwrap();
      showToast(response.message, "success");
    } catch (error) {
      showToast(error.data.message.message, "error");
    }
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      dispatch(setImage(URL.createObjectURL(file)));
    }
  };

  useEffect(() => {
    dispatch(setName(dataEdit?.products.name || ""));
    dispatch(setCategoryId(dataEdit?.categories.id || 0));
    dispatch(setPrice(dataEdit?.products.price || 0));
    dispatch(setStock(dataEdit?.products.stock || 0));
    dispatch(setDescription(dataEdit?.products.description || ""));
    dispatch(setTagId(dataEdit?.tags.id || 0));
    dispatch(setColorId(dataEdit?.colors.id || 0));
    dispatch(setYearId(dataEdit?.years.id || 0));
    dispatch(setImage(dataEdit?.product_images.imageUrl || null));
  }, [dataEdit, dispatch]);

  return (
    <div className="flex bg-white rounded-md  flex-col min-w-[350px]">
      {isForm && (
        <div className="p-4 mt-2">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Edit product</h4>
            <button
              onClick={onClose}
              className="hover:scale-115 transition-all duration-300  bg-black hover:bg-red-500 rounded-sm p-1 text-white"
            >
              <RiCloseFill />
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name-product" className="font-semibold mb-1">
                Name
              </label>
              <input
                onChange={(e) => dispatch(setName(e.target.value))}
                className="rounded-lg border p-3"
                type="text"
                id="name-product"
                name="name-product"
                value={name}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="cursor-pointer bg-dark text-white py-2 px-4 rounded-lg hover:bg-dark-2 transition">
                  Choose image
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    className="hidden"
                    onChange={(e) => handleAddImage(e)}
                  />
                </label>

                {image && (
                  <div className="border mx-auto border-gray-700 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={image}
                      alt="image"
                      className="max-w-48 h-48 object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="description" className="font-semibold mb-1">
                  Description
                </label>
                <textarea
                  onChange={(e) => dispatch(setDescription(e.target.value))}
                  className="rounded-lg border p-3"
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  placeholder="Enter description"
                  rows="7"
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label htmlFor="price" className="font-semibold mb-1">
                  Price
                </label>
                <input
                  onChange={(e) => dispatch(setPrice(e.target.value))}
                  className="rounded-lg border p-3"
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  placeholder="Enter price"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="stock" className="font-semibold mb-1">
                  Stock
                </label>
                <input
                  onChange={(e) => dispatch(setStock(e.target.value))}
                  className="rounded-lg border p-3"
                  type="number"
                  id="stock"
                  name="stock"
                  value={stock}
                  placeholder="Enter stock"
                  required
                />
              </div>

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
                  {data?.categories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <select
                  className="rounded-lg border p-3"
                  name="tagId"
                  id="tagId"
                  value={tagId}
                  onChange={(e) => dispatch(setTagId(e.target.value))}
                >
                  <option className="text-gray-400" value={0}>
                    Select tag
                  </option>
                  {data?.tags
                    .filter((tag) => tag.categoryId === Number(categoryId))
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col">
                <select
                  className="rounded-lg border p-3"
                  name="colorId"
                  id="colorId"
                  value={colorId}
                  onChange={(e) => dispatch(setColorId(e.target.value))}
                >
                  <option className="text-gray-400" value={0}>
                    Select color
                  </option>
                  {data?.colors.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <select
                  className="rounded-lg border p-3"
                  name="yearId"
                  id="yearId"
                  value={yearId}
                  onChange={(e) => dispatch(setYearId(e.target.value))}
                >
                  <option className="text-gray-400" value={0}>
                    Select year
                  </option>
                  {data?.years.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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

export default FormEditProduct;
