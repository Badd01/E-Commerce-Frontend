import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import storeReducer from "./features/storeSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    // for Selectors: read state
    auth: authReducer,
    store: storeReducer,

    // for dispatch: write state
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
