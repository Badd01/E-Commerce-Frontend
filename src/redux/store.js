import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import shopReducer from "./features/shopSlice";
import productsReducer from "./features/productsSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    // for Selectors: read state
    auth: authReducer,
    shop: shopReducer,
    products: productsReducer,

    // for dispatch: write state
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
