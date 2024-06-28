import { IContact } from "@/@types/crm";
import { REAL_API_BASE_URL } from "@/utils/constants";
import { getErrorToast, getSuccessToast } from "@/utils/constants/toast";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: `${REAL_API_BASE_URL}` }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    getContacts: build.query<IContact[], string>({
      query: () => "/contact/contact",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ uuid }) => ({
                type: "Contacts" as const,
                uuid,
              })),
              { type: "Contacts", uuid: "LIST" },
            ]
          : [{ type: "Contacts", uuid: "LIST" }],
    }),
    addContact: build.mutation<IContact, Partial<IContact>>({
      query: (body) => ({
        url: `/contact/contact`,
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res, "response from api");

          // show success toast if ok
          if (res.meta?.response?.ok) {
            getSuccessToast(`Contact created !!!`);
          } else {
            // show error toast
            getErrorToast(`Cannot create contact `);
          }
        } catch (err) {
          console.log(err, "error");
          // show error toast
          getErrorToast(`Cannot create contact  ${err.error.data.error}`);
        }
      },
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    getContact: build.query<IContact, string | undefined>({
      query: (uuid) => `/contact/contact/${uuid}`,
      providesTags: () => [{ type: "Contacts", id: "detail" }],
    }),
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
  useGetContactQuery,
  useAddContactMutation,
  //   useUpdateTaskMutation,
  //   useDeleteTaskMutation,
} = contactApi;
