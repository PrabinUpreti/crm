import { IProject } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ProjectResponse = IProject[];

export const projectApi = createApi({
  reducerPath: "project",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Project"],
  endpoints: (build) => ({
    getProjects: build.query<ProjectResponse, string>({
      query: () => "projects",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Project" as const, id })),
              { type: "Project", id: "LIST" },
            ]
          : [{ type: "Project", id: "LIST" }],
    }),
    addProject: build.mutation<IProject, Partial<IProject>>({
      query: (body) => ({
        url: `projects`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Project", id: "LIST" }],
    }),
    getProject: build.query<IProject, string | undefined>({
      query: (id) => `projects/${id}`,
      providesTags: (result, error, id) => [{ type: "Project", id }],
    }),
    updateProject: build.mutation<
      void,
      Pick<IProject, "id"> & Partial<IProject>
    >({
      query: ({ id, ...patch }) => ({
        url: `projects/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          projectApi.util.updateQueryData("getProject", id, (draft) => {
            Object.assign(draft, patch);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Project", id }],
    }),
    deleteProject: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `projects/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Project", id }],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useGetProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
