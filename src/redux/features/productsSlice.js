import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addForm: false,
  editForm: false,
  dataEdit: null,
  name: "",
  categoryId: 0,
  price: 0,
  stock: 0,
  description: "",
  tagId: 0,
  colorId: 0,
  yearId: 0,
  image: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setStock: (state, action) => {
      state.stock = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setTagId: (state, action) => {
      state.tagId = action.payload;
    },
    setColorId: (state, action) => {
      state.colorId = action.payload;
    },
    setYearId: (state, action) => {
      state.yearId = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },

    openAddForm: (state) => {
      state.addForm = true;
    },
    closeAddForm: (state) => {
      state.addForm = false;
      state.name = "";
      state.categoryId = 0;
      state.price = 0;
      state.stock = 0;
      state.description = "";
      state.tagId = 0;
      state.colorId = 0;
      state.yearId = 0;
      state.image = null;
    },
    openEditForm: (state, action) => {
      state.editForm = true;
      state.dataEdit = action.payload;
    },
    closeEditForm: (state) => {
      state.editForm = false;
      state.dataEdit = null;
      state.name = "";
      state.categoryId = 0;
      state.price = 0;
      state.stock = 0;
      state.description = "";
      state.tagId = 0;
      state.colorId = 0;
      state.yearId = 0;
      state.image = null;
    },
  },
});

export const {
  setCategoryId,
  setColorId,
  setDescription,
  setImage,
  setName,
  setPrice,
  setStock,
  setTagId,
  setYearId,
  openAddForm,
  openEditForm,
  closeAddForm,
  closeEditForm,
} = productsSlice.actions;
export default productsSlice.reducer;
