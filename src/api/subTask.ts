import { ISubTask } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type SubTaskResponse = ISubTask[];

export const subTaskApi = createApi({
  reducerPath: "subTask",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["SubTask"],
  endpoints: (build) => ({
    getSubTasks: build.query<SubTaskResponse, string>({
      query: () => "subTasks",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "SubTask" as const, id })),
              { type: "SubTask", id: "LIST" },
            ]
          : [{ type: "SubTask", id: "LIST" }],
    }),
    addSubTask: build.mutation<ISubTask, Partial<ISubTask>>({
      query: (body) => ({
        url: `subTasks`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "SubTask", id: "LIST" }],
    }),
    getSubTask: build.query<ISubTask, string | undefined>({
      query: (id) => `subTasks/${id}`,
      providesTags: (result, error, id) => [{ type: "SubTask", id }],
    }),
    updateSubTask: build.mutation<
      void,
      Pick<ISubTask, "id"> & Partial<ISubTask>
    >({
      query: ({ id, ...patch }) => ({
        url: `subTasks/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          subTaskApi.util.updateQueryData("getSubTask", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "SubTask", id }],
    }),
    deleteSubTask: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `subTasks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "SubTask", id }],
    }),
  }),
});

export const {
  useGetSubTaskQuery,
  useGetSubTasksQuery,
  useAddSubTaskMutation,
  useUpdateSubTaskMutation,
  useDeleteSubTaskMutation,
} = subTaskApi;
