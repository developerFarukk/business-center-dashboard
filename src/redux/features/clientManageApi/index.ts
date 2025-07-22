
import { baseApi } from "@/redux/api/baseApi";
import type { TClient } from "@/types/clientType";
import type { TResponseRedux } from "@/types/global";

const clientManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // get all client api
    getAllClient: builder.query({
      query: () => ({
        url: "/client/apiClient/list?limit=300",
        method: "GET",
      }),
      providesTags: ["Client"],
      transformResponse: (response: TResponseRedux<TClient[]>) => {
        return response
      },
    }),

    // Get single Bicycle
    // getSingleBicycle: builder.query({
    //     query: (id) => {
    //         return {
    //             url: `/bicycle/${id}`,
    //             method: 'GET',
    //         };
    //     },
    //     transformResponse: (response: TResponseRedux<any>) => {
    //         return {
    //             data: response.data,
    //         };
    //     },
    // }),

    // create Product API
    // addProduct: builder.mutation({
    //     query: (data) => ({
    //         url: '/bicycle/create-bicycle',
    //         method: 'POST',
    //         body: data,
    //     }),
    // }),

    // delete product Api
    // deleteProduct: builder.mutation({
    //     query: ({ id, body }) => ({
    //         url: `/bicycle/${id}`,
    //         method: 'PATCH',
    //         body,
    //     }),
    //     invalidatesTags: ['Bicycle']
    // }),

    // Update Product
    // updateProduct: builder.mutation({
    //     query: ({ bicycleId, body }) => ({
    //         url: `/bicycle/${bicycleId}`,
    //         method: 'PATCH',
    //         body,
    //     }),
    //     invalidatesTags: ['Bicycle']
    // }),
  }),
});

export const { useGetAllClientQuery } = clientManagementApi;
