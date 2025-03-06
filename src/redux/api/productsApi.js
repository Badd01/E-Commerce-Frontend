import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/getBaseUrl";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/products`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (review) => ({ url: "/review", method: "POST", body: review }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({ url: "/", method: "POST", body: product }),
    }),
    getProducts: builder.query({
      query: () => "/",
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/${slug}`,
    }),
    updateProduct: builder.mutation({
      query: ({ slug, ...data }) => ({
        url: `/${slug}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (slug) => ({ url: `/${slug}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
} = productsApi;
