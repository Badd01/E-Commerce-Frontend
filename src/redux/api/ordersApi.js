import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/getBaseUrl";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({ url: "/create", method: "POST", body: order }),
    }),
    getOrdersByUser: builder.query({
      query: () => "/",
    }),
    getOrdersByAdmin: builder.query({
      query: () => "/admin",
    }),
    updateOrderStatus: builder.mutation({
      query: (status) => ({ url: "/update", method: "PUT", body: status }),
    }),
    getRevenue: builder.query({
      query: () => "/revenue",
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersByUserQuery,
  useGetOrdersByAdminQuery,
  useUpdateOrderStatusMutation,
  useGetRevenueQuery,
} = ordersApi;
