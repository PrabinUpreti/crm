import { IBudget } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type BudgetsResponse = IBudget[];

export const budgetsApi = createApi({
  reducerPath: "budgets",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Budgets"],
  endpoints: (build) => ({
    getBudgets: build.query<BudgetsResponse, IBudget>({
      query: () => "budgets",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Budgets" as const, id })),
              { type: "Budgets", id: "LIST" },
            ]
          : [{ type: "Budgets", id: "LIST" }],
    }),
    addBudgets: build.mutation<IBudget, Partial<IBudget>>({
      query: (body) => ({
        url: `budgets`,
        method: "Budgets",
        body,
      }),
      invalidatesTags: [{ type: "Budgets", id: "LIST" }],
    }),
    getBudget: build.query<IBudget, string>({
      query: (id) => `budgets/${id}`,
      providesTags: (result, error, id) => [{ type: "Budgets", id }],
    }),
    updateBudgets: build.mutation<void, Pick<IBudget, "id"> & Partial<IBudget>>(
      {
        query: ({ id, ...patch }) => ({
          url: `budgets/${id}`,
          method: "PUT",
          body: patch,
        }),
        async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            budgetsApi.util.updateQueryData("getBudgets", id, (draft) => {
              Object.assign(draft, patch);
            })
          );
          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        },
        invalidatesTags: (result, error, { id }) => [{ type: "Budgets", id }],
      }
    ),
    deleteBudgets: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `budgets/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Budgets", id }],
    }),
  }),
});

export const {
  useGetBudgetQuery,
  useGetBudgetsQuery,
  useAddBudgetsMutation,
  useUpdateBudgetsMutation,
  useDeleteBudgetsMutation,
} = budgetsApi;
