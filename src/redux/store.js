import { configureStore } from "@reduxjs/toolkit";
import { cartsApi } from "./api/cartsApi";
import { authApi } from "./api/authApi";
import { ordersApi } from "./api/ordersApi";
import { productsApi } from "./api/productsApi";
import { usersApi } from "./api/usersApi";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    // for Selectors: read state
    auth: authReducer,

    // for Dispatch: action => update state
    [authApi.reducerPath]: authApi.reducer,
    [cartsApi.reducerPath]: cartsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      usersApi.middleware,
      productsApi.middleware,
      ordersApi.middleware,
      cartsApi.middleware
    ),
});
