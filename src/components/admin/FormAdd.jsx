import { RiCloseFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { shopApi } from "../../redux/api/shopApi";

const FormAdd = ({ type, onClose, showToast }) => {
  const [createProduct, { isLoading: isLoadingProduct }] =
    shopApi.useCreateProductMutation();
  const [createCategory, { isLoading: isLoadingCategory }] =
    shopApi.useCreateCategoryMutation();
  const [createTag, { isLoading: isLoadingTag }] =
    shopApi.useCreateTagMutation();
  const [createColor, { isLoading: isLoadingColor }] =
    shopApi.useCreateColorMutation();
  const [createYear, { isLoading: isLoadingYear }] =
    shopApi.useCreateYearMutation();
  const [getAllCategory, { data: categories }] =
    shopApi.useLazyGetAllCategoryQuery();
  const [getAllTag, { data: tags }] = shopApi.useLazyGetAllTagQuery();
  const [getAllColor, { data: colors }] = shopApi.useLazyGetAllColorQuery();
  const [getAllYear, { data: years }] = shopApi.useLazyGetAllYearQuery();

  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [tagId, setTagId] = useState("");
  const [colorId, setColorId] = useState("");
  const [yearId, setYearId] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setName("");
    if (type === "tag") {
      setCategoryId("");
      if (!categories) getAllCategory();
    }
    if (type === "product") {
      setPrice(0);
      setStock(0);
      setDescription("");
      setTagId("");
      setColorId("");
      setYearId("");
      setImage("");
      setPreview("");
      if (!tags) getAllTag();
      if (!colors) getAllColor();
      if (!years) getAllYear();
      if (!categories) getAllCategory();
    }
    // eslint-disable-next-line
  }, [type]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAdd = async () => {
    switch (type) {
      case "category": {
        try {
          // unwrap() returns a promise
          const data = await createCategory({ name }).unwrap();
          showToast(data.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      case "tag": {
        try {
          const data = await createTag({ name, categoryId }).unwrap();
          showToast(data.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      case "color": {
        try {
          const data = await createColor({ name }).unwrap();
          showToast(data.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      case "year": {
        try {
          const data = await createYear({ name }).unwrap();
          showToast(data.message, "success");
        } catch (error) {
          showToast(error.data.message, "error");
        }
        break;
      }
      case "product": {
        try {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("description", description);
          formData.append("price", price);
          formData.append("stock", stock);
          formData.append("categoryId", categoryId);
          formData.append("tagId", tagId);
          formData.append("colorId", colorId);
          formData.append("yearId", yearId);
          formData.append("image", image);

          const data = await createProduct(formData).unwrap();
          showToast(data.message, "success");
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
      className={`flex bg-white rounded-md  flex-col transition-transform duration-500 min-w-[350px]  ${
        type ? " translate-x-0" : " translate-x-full"
      }`}
    >
      <div className="p-4 mt-2">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Add new {type}</h4>
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
                <option className="text-gray-400" value="">
                  Select category
                </option>
                {categories?.data.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {type === "product" && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="cursor-pointer bg-dark text-white py-2 px-4 rounded-lg hover:bg-dark-2 transition">
                    Choose image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                      required
                    />
                  </label>

                  {preview && (
                    <div className="border border-gray-700 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-48 h-48 object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor={`description-${type}`}
                    className="font-semibold mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    className="rounded-lg border p-3"
                    type="text"
                    id={`description-${type}`}
                    name={`description-${type}`}
                    value={description}
                    placeholder="Enter description"
                    rows="7"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor={`price-${type}`}
                    className="font-semibold mb-1"
                  >
                    Price
                  </label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    className="rounded-lg border p-3"
                    type="number"
                    id={`price-${type}`}
                    name={`price-${type}`}
                    value={price}
                    placeholder="Enter price"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor={`stock-${type}`}
                    className="font-semibold mb-1"
                  >
                    Stock
                  </label>
                  <input
                    onChange={(e) => setStock(e.target.value)}
                    className="rounded-lg border p-3"
                    type="number"
                    id={`stock-${type}`}
                    name={`stock-${type}`}
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
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    <option className="text-gray-400" value="">
                      Select category
                    </option>
                    {categories?.data.map((item) => (
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
                    onChange={(e) => setTagId(e.target.value)}
                  >
                    <option className="text-gray-400" value="">
                      Select tag
                    </option>
                    {tags?.data.map((item) => (
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
                    onChange={(e) => setColorId(e.target.value)}
                  >
                    <option className="text-gray-400" value="">
                      Select color
                    </option>
                    {colors?.data.map((item) => (
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
                    onChange={(e) => setYearId(e.target.value)}
                  >
                    <option className="text-gray-400" value="">
                      Select year
                    </option>
                    {years?.data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
          <div className="flex flex-col">
            <button
              onClick={handleAdd}
              className="bg-dark text-white text-xl py-3 rounded-xl font-semibold  hover:scale-105 transition-all duration-500  disabled:opacity-50 disabled:bg-dark-2 disabled:text-gray-400"
              disabled={
                isLoadingCategory ||
                isLoadingTag ||
                isLoadingColor ||
                isLoadingYear ||
                isLoadingProduct
              }
            >
              {isLoadingCategory ||
              isLoadingTag ||
              isLoadingColor ||
              isLoadingYear ||
              isLoadingProduct
                ? "Adding..."
                : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAdd;
