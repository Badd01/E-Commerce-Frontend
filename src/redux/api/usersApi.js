import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../utils/getBaseUrl";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/users`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({ url: "/update", method: "PUT", body: data }),
      invalidatesTags: ["User"],
    }),
    changePassword: builder.mutation({
      query: (passwords) => ({
        url: "/update/password",
        method: "PUT",
        body: passwords,
      }),
    }),
    getAllUser: builder.query({
      query: () => "/all-user",
      providesTags: ["User"],
    }),
    updateRoleUser: builder.mutation({
      query: (id, role) => ({
        url: `/update/role/${id}`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
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
