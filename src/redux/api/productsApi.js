import { apiSlice } from "./apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (review) => ({
        url: "/products/review",
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["products"],
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
    getProducts: builder.query({
      query: ({ page = 1, sortBy = "createdAt", sortOrder = "asc" }) => 
        `/products?page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      providesTags: ["products"],
      keepUnusedDataFor: 300, // cache keep data for 5 minutes
    }),
    // getProducts: builder.query({
    //   query: () => "/products",
    //   providesTags: ["products"],
    //   keepUnusedDataFor: 300, // cache keep data for 5 minutes
    // }),
    getProductBySlug: builder.query({
      query: (slug) => `/products/${slug}`,
      providesTags: ["products"],
      keepUnusedDataFor: 60,
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/products/${id}`, method: "DELETE" }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
} = productsApi;
