


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";


const baseQuery = fetchBaseQuery({
    // baseUrl: "http://localhost:5001/api/v1",
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set("authorization", `${token}`);
        }

        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: [ 'User'],
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
