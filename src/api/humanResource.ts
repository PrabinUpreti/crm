import { IHumanResource } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type HumanResourcesResponse = IHumanResource[];

export const humanResourcesApi = createApi({
  reducerPath: "humanResources",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["HumanResources"],
  endpoints: (build) => ({
    getHumanResources: build.query<HumanResourcesResponse, IHumanResource>({
      query: () => "humanResources",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "HumanResources" as const,
                id,
              })),
              { type: "HumanResources", id: "LIST" },
            ]
          : [{ type: "HumanResources", id: "LIST" }],
    }),
    addHumanResources: build.mutation<IHumanResource, Partial<IHumanResource>>({
      query: (body) => ({
        url: `humanResources`,
        method: "HumanResources",
        body,
      }),
      invalidatesTags: [{ type: "HumanResources", id: "LIST" }],
    }),
    getHumanResource: build.query<IHumanResource, string>({
      query: (id) => `humanResources/${id}`,
      providesTags: (result, error, id) => [{ type: "HumanResources", id }],
    }),
    updateHumanResources: build.mutation<
      void,
      Pick<IHumanResource, "id"> & Partial<IHumanResource>
    >({
      query: ({ id, ...patch }) => ({
        url: `humanResources/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          humanResourcesApi.util.updateQueryData(
            "getHumanResources",
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
        { type: "HumanResources", id },
      ],
    }),
    deleteHumanResources: build.mutation<
      { success: boolean; id: number },
      number
    >({
      query(id) {
        return {
          url: `humanResources/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "HumanResources", id }],
    }),
  }),
});

export const {
  useGetHumanResourceQuery,
  useGetHumanResourcesQuery,
  useAddHumanResourcesMutation,
  useUpdateHumanResourcesMutation,
  useDeleteHumanResourcesMutation,
} = humanResourcesApi;
