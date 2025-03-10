import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addType: null,
  editType: null,
  dataEdit: null,
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    openAddForm: (state, action) => {
      state.addType = action.payload;
    },
    closeAddForm: (state) => {
      state.addType = null;
    },
    openEditForm: (state, action) => {
      console.log(action.payload);
      state.editType = action.payload.type;
      state.dataEdit = action.payload.item;
    },
    closeEditForm: (state) => {
      state.editType = null;
      state.dataEdit = null;
    },
  },
});

export const { openAddForm, closeAddForm, openEditForm, closeEditForm } =
  storeSlice.actions;
export default storeSlice.reducer;
