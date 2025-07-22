


import { baseApi } from "@/redux/api/baseApi";
import type { TResponseRedux } from "@/types/global";
import type { TBulkSms } from "@/types/smsType";

const bulkSmsManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // get all client api
    getBulkSms: builder.query({
      query: () => ({
        url: "/client/bulkClient/list?limit=300",
        method: "GET",
      }),
      providesTags: ["Sms"],
      transformResponse: (response: TResponseRedux<TBulkSms[]>) => {
        return response
      },
    }),

  }),
});

export const { useGetBulkSmsQuery } = bulkSmsManagementApi;
