import { ITimeTracking } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TimeTrackingsResponse = ITimeTracking[];

export const timeTrackingsApi = createApi({
  reducerPath: "timeTrackings",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["TimeTrackings"],
  endpoints: (build) => ({
    getTimeTrackings: build.query<TimeTrackingsResponse, string>({
      query: () => "timeTrackings",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "TimeTrackings" as const,
                id,
              })),
              { type: "TimeTrackings", id: "LIST" },
            ]
          : [{ type: "TimeTrackings", id: "LIST" }],
    }),
    addTimeTrackings: build.mutation<ITimeTracking, Partial<ITimeTracking>>({
      query: (body) => ({
        url: `timeTrackings`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "TimeTrackings", id: "LIST" }],
    }),
    getTimeTracking: build.query<ITimeTracking, string>({
      query: (id) => `timeTrackings/${id}`,
      providesTags: (result, error, id) => [{ type: "TimeTrackings", id }],
    }),
    updateTimeTrackings: build.mutation<
      void,
      Pick<ITimeTracking, "id"> & Partial<ITimeTracking>
    >({
      query: ({ id, ...patch }) => ({
        url: `timeTrackings/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          timeTrackingsApi.util.updateQueryData(
            "getTimeTrackings",
            id,
            (draft) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "TimeTrackings", id },
      ],
    }),
    deleteTimeTrackings: build.mutation<
      { success: boolean; id: number },
      number
    >({
      query(id) {
        return {
          url: `timeTrackings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "TimeTrackings", id }],
    }),
  }),
});

export const {
  useGetTimeTrackingQuery,
  useGetTimeTrackingsQuery,
  useAddTimeTrackingsMutation,
  useUpdateTimeTrackingsMutation,
  useDeleteTimeTrackingsMutation,
} = timeTrackingsApi;
