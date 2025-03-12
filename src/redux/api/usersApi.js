import { apiSlice } from "./apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({ url: "/users/update", method: "PUT", body: data }),
      invalidatesTags: ["User"],
    }),
    changePassword: builder.mutation({
      query: (passwords) => ({
        url: "/users/update/password",
        method: "PUT",
        body: passwords,
      }),
    }),
    getAllUser: builder.query({
      query: () => "/users/all-user",
      providesTags: ["User"],
      keepUnusedDataFor: 300,
    }),
    updateRoleUser: builder.mutation({
      query: ({ id, role }) => ({
        url: `/users/update/role/${id}`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  useGetAllUserQuery,
  useUpdateRoleUserMutation,
} = usersApi;
