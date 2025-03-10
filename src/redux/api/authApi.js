import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Mutations are used to send data updates to the server and apply the changes to the local cache.
    // Mutations can also invalidate cached data and force re-fetches.
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ password, token }) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: { password, token },
      }),
    }),
    //  data fetching
    googleCallback: builder.query({
      query: () => "/auth/google/callback",
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRefreshTokenMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGoogleCallbackQuery,
} = authApi;
