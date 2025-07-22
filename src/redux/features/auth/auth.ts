import { baseApi } from "@/redux/api/baseApi";



const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: { username: string; password: string }) => ({
        url: "/auth/login/",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

