import { IInventories } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type InventoriesResponse = IInventories[];

export const inventoriesApi = createApi({
  reducerPath: "inventories",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Inventories"],
  endpoints: (build) => ({
    getInventories: build.query<InventoriesResponse, IInventories>({
      query: () => "inventories",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Inventories" as const, id })),
              { type: "Inventories", id: "LIST" },
            ]
          : [{ type: "Inventories", id: "LIST" }],
    }),
    addInventories: build.mutation<IInventories, Partial<IInventories>>({
      query: (body) => ({
        url: `inventories`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Inventories", id: "LIST" }],
    }),
    getInventory: build.query<IInventories, string>({
      query: (id) => `inventories/${id}`,
      providesTags: (result, error, id) => [{ type: "Inventories", id }],
    }),
    updateInventories: build.mutation<
      void,
      Pick<IInventories, "id"> & Partial<IInventories>
    >({
      query: ({ id, ...patch }) => ({
        url: `inventories/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          inventoriesApi.util.updateQueryData("getInventories", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Inventories", id }],
    }),
    deleteInventories: build.mutation<{ success: boolean; id: number }, number>(
      {
        query(id) {
          return {
            url: `inventories/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: (result, error, id) => [{ type: "Inventories", id }],
      }
    ),
  }),
});

export const {
  useGetInventoryQuery,
  useGetInventoriesQuery,
  useAddInventoriesMutation,
  useUpdateInventoriesMutation,
  useDeleteInventoriesMutation,
} = inventoriesApi;
