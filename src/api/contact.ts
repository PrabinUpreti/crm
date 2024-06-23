import { IContact } from "@/@types/crm";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    getContacts: build.query<IContact[], string>({
      query: () => "contacts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contacts" as const, id })),
              { type: "Contacts", id: "LIST" },
            ]
          : [{ type: "Contacts", id: "LIST" }],
    }),
    // addTask: build.mutation<ITask, Partial<ITask>>({
    //   query: (body) => ({
    //     url: `tasks`,
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [{ type: "Task", id: "LIST" }],
    // }),
    // getTask: build.query<ITask, string | undefined>({
    //   query: (id) => `tasks/${id}`,
    //   providesTags: (result, error, id) => [{ type: "Task", id }],
    // }),
    // updateTask: build.mutation<void, Pick<ITask, "id"> & Partial<ITask>>({
    //   query: ({ id, ...patch }) => ({
    //     url: `tasks/${id}`,
    //     method: "PUT",
    //     body: patch,
    //   }),
    //   async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
    //     const patchResult = dispatch(
    //       taskApi.util.updateQueryData("getTask", id, (draft) => {
    //         Object.assign(draft, patch);
    //       })
    //     );
    //     try {
    //       await queryFulfilled;
    //     } catch {
    //       patchResult.undo();
    //     }
    //   },
    //   invalidatesTags: (result, error, { id }) => [{ type: "Task", id }],
    // }),
    // deleteTask: build.mutation<{ success: boolean; id: number }, number>({
    //   query(id) {
    //     return {
    //       url: `tasks/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: (result, error, id) => [{ type: "Task", id }],
    // }),
  }),
});

export const {
  useGetContactsQuery,
  //   useGetTaskQuery,
  //   useAddTaskMutation,
  //   useUpdateTaskMutation,
  //   useDeleteTaskMutation,
} = contactApi;
