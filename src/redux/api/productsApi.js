import { apiSlice } from "./apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (review) => ({
        url: "/products/review",
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/products/${slug}`,
      providesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ slug, ...data }) => ({
        url: `/products/${slug}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (slug) => ({ url: `/products/${slug}`, method: "DELETE" }),
      invalidatesTags: ["Product"],
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
