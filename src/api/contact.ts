import { IContact } from "@/@types/crm";
import { REAL_API_BASE_URL } from "@/utils/constants";
import { getErrorToast, getSuccessToast } from "@/utils/constants/toast";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { redirect } from "react-router";

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
    updateContact: build.mutation<
      void,
      Pick<IContact, "uuid"> & Partial<IContact>
    >({
      query: ({ uuid, ...patch }) => ({
        url: `/contact/contact/${uuid}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ uuid, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          contactApi.util.updateQueryData("getContact", uuid, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          const res = await queryFulfilled;

          if (res.meta?.response?.ok) {
            getSuccessToast(`Contact created !!!`);
            // redirect("/crm/contact");
          } else {
            // show error toast
            getErrorToast(`Cannot create contact `);
          }
        } catch (err) {
          patchResult.undo();

          console.log(err, "error");
          // show error toast
          getErrorToast(`Cannot create contact  ${err.error.data.error}`);
        }
      },
      invalidatesTags: (result, error, { uuid }) => [
        { type: "Contacts", uuid },
      ],
    }),
    deleteContact: build.mutation<{ success: boolean; uuid: number }, string>({
      query(uuid) {
        return {
          url: `/contact/contact/${uuid}`,
          method: "DELETE",
        };
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res, "response from api");

          // show success toast if ok
          if (res.meta?.response?.ok) {
            getSuccessToast(`Contact Deleted !!!`);
          } else {
            // show error toast
            getErrorToast(`Cannot Delete contact `);
          }
        } catch (err) {
          console.log(err, "error");
          // show error toast
          getErrorToast(`Cannot create contact  ${err.error.data.error}`);
        }
      },
      invalidatesTags: (result, error, uuid) => [{ type: "Contacts", uuid }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
