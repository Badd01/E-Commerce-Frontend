import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/getBaseUrl";

export const cartsApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/carts`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (item) => ({ url: "/add", method: "POST", body: item }),
    }),
    getCart: builder.query({
      query: () => "/",
    }),
    clearCart: builder.mutation({
      query: () => ({ url: "/delete", method: "DELETE" }),
    }),
    removeCartItem: builder.mutation({
      query: (itemId) => ({
        url: "/remove",
        method: "DELETE",
        body: { itemId },
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useClearCartMutation,
  useRemoveCartItemMutation,
} = cartsApi;
