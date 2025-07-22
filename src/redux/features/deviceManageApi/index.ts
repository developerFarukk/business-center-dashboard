import { baseApi } from "@/redux/api/baseApi";
import type { TDevice } from "@/types/deviceType";
import type { TResponseRedux } from "@/types/global";

const deviceManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get Device api
    getAllDevice: builder.query({
      query: () => ({
        url: "/device/devices/list/?limit=300",
        method: "GET",
      }),
      providesTags: ["Device"],
      transformResponse: (response: TResponseRedux<TDevice[]>) => {
        return response;
      },
    }),
  }),
});

export const { useGetAllDeviceQuery } = deviceManagementApi;
