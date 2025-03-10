import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, tokenReceived } from "../features/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `http://localhost:9000/api`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      { url: "/auth/refresh-token", method: "POST" },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      // store the new token
      api.dispatch(tokenReceived(refreshResult.data));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product", "Categories", "Tags", "Colors", "Years", "User"],
  endpoints: () => ({}),
});
