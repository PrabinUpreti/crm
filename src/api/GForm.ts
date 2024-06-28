import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://pragyo.localhost.com:9006/api/v1/form/";
export interface IGForm {
  title: string;
  fields: any;
  status: string;
  organizationId: string | number;
}

export const GFormApi = createApi({
  reducerPath: "form",
  tagTypes: ["Form"],
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getGForm: build.query<IGForm, string | undefined>({
      query: () => "form/",
      providesTags: (result) =>
        result
          ? [
              { type: "Form", id: "LIST" },
              ...result.map(({ id }) => ({ type: "Form" as const, id })),
            ]
          : [{ type: "Form", id: "LIST" }],
    }),

    getOneForm: build.query<IGForm, string | undefined>({
      providesTags: (result, error, id) => [{ type: "Form", id }],
      query: (id) => `form/${id}/`,
    }),

    getLink: build.query<IGForm, string | undefined>({
      providesTags: (result, error, id) => [{ type: "Form", id }],
      query: (id) => `form/${id}/`,
    }),

    publishForm: build.mutation<IGForm, Partial<IGForm>>({
      query: (id) => ({
        url: `form/${id}/publishForm/`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Form", id: "LIST" }],
    }),

    addGForm: build.mutation<IGForm, Partial<IGForm>>({
      query: (body) => ({
        url: `form/?status=${body.status}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Form", id: "LIST" }],
    }),
  }),
});

export const {
  useAddGFormMutation,
  useGetGFormQuery,
  useGetOneFormQuery,
  usePublishFormMutation,
  useGetLinkQuery,
} = GFormApi;
