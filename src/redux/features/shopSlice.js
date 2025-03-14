import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addType: null,
  editType: null,
  dataEdit: null,
  name: "",
  categoryId: 0,
  shopData: JSON.parse(sessionStorage.getItem("shopData")) || null
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setShopData: (state, action) => {
      state.shopData = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    openAddForm: (state, action) => {
      state.addType = action.payload;
    },
    closeAddForm: (state) => {
      state.addType = null;
      state.name = "";
      state.categoryId = 0;
    },
    openEditForm: (state, action) => {
      state.editType = action.payload.type;
      state.dataEdit = action.payload.item;
    },
    closeEditForm: (state) => {
      state.editType = null;
      state.dataEdit = null;
      state.name = "";
      state.categoryId = 0;
    },
  },
});

export const {
  setShopData,
  setName,
  setCategoryId,
  openAddForm,
  closeAddForm,
  openEditForm,
  closeEditForm,
} = shopSlice.actions;
export default shopSlice.reducer;
