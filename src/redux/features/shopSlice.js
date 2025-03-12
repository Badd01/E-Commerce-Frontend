import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addType: null,
  editType: null,
  dataEdit: null,
  name: "",
  categoryId: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
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
  setName,
  setCategoryId,
  openAddForm,
  closeAddForm,
  openEditForm,
  closeEditForm,
} = shopSlice.actions;
export default shopSlice.reducer;
