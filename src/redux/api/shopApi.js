import { apiSlice } from "./apiSlice";

export const shopApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: ({ type, ...data }) => ({
        url: `/shop/${type}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { type }) => {
        if (error) {
          return [];
        }
        return [type];
      },
    }),
    getAllItem: builder.query({
      query: ({ type }) => `/shop/${type}`,
      providesTags: (result, error, { type }) => {
        if (error) {
          return [];
        }
        return [type];
      },
    }),
    getAllShop: builder.query({
      query: () => `/shop`,
      providesTags: ["categories", "colors", "tags", "years"],
      keepUnusedDataFor: 300, // cache keep data for 5 minutes
    }),
    updateItem: builder.mutation({
      query: ({ type, id, ...data }) => ({
        url: `/shop/${type}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { type }) => {
        if (type === "categories") {
          return ["categories", "tags"];
        }
        if (error) {
          return [];
        }
        return [type];
      },
    }),
    deleteItem: builder.mutation({
      query: ({ type, id }) => ({
        url: `/shop/${type}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { type }) => {
        if (error) {
          return [];
        }
        return [type];
      },
    }),
  }),
});

export const {
  useCreateItemMutation,
  useGetAllItemQuery,
  useUpdateItemMutation,
  useDeleteItemMutation,
  useGetAllShopQuery,
} = shopApi;
