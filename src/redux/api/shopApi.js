import { apiSlice } from "./apiSlice";

export const shopApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/shop/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),
    createTag: builder.mutation({
      query: (data) => ({
        url: "/shop/tags",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tags"],
    }),
    createColor: builder.mutation({
      query: (data) => ({
        url: "/shop/colors",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Colors"],
    }),
    createYear: builder.mutation({
      query: (data) => ({
        url: "/shop/years",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Years"],
    }),
    getAllCategory: builder.query({
      query: () => "/shop/categories",
      providesTags: ["Categories"],
    }),
    getAllTag: builder.query({
      query: () => "/shop/tags",
      providesTags: ["Tags"],
    }),
    getAllColor: builder.query({
      query: () => "/shop/colors",
      providesTags: ["Colors"],
    }),
    getAllYear: builder.query({
      query: () => "/shop/years",
      providesTags: ["Years"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/shop/categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Categories", "Tags"],
    }),
    updateTag: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/shop/tags/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tags"],
    }),
    updateColor: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/shop/colors/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Colors"],
    }),
    updateYear: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/shop/years/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Years"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({ url: `/shop/categories/${id}`, method: "DELETE" }),
      invalidatesTags: ["Categories", "Tags"],
    }),
    deleteTag: builder.mutation({
      query: (id) => ({ url: `/shop/tags/${id}`, method: "DELETE" }),
      invalidatesTags: ["Tags"],
    }),
    deleteColor: builder.mutation({
      query: (id) => ({ url: `/shop/colors/${id}`, method: "DELETE" }),
      invalidatesTags: ["Colors"],
    }),
    deleteYear: builder.mutation({
      query: (id) => ({ url: `/shop/years/${id}`, method: "DELETE" }),
      invalidatesTags: ["Years"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useCreateTagMutation,
  useCreateColorMutation,
  useCreateYearMutation,
  useGetAllCategoryQuery,
  useGetAllTagQuery,
  useGetAllColorQuery,
  useGetAllYearQuery,
  useUpdateCategoryMutation,
  useUpdateTagMutation,
  useUpdateColorMutation,
  useUpdateYearMutation,
  useDeleteCategoryMutation,
  useDeleteTagMutation,
  useDeleteColorMutation,
  useDeleteYearMutation,
} = shopApi;
