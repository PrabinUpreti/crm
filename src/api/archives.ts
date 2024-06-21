import { IArchive } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ArchiveResponse = IArchive[];

export const archiveApi = createApi({
  reducerPath: "archive",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Archive"],
  endpoints: (build) => ({
    getArchives: build.query<ArchiveResponse, string>({
      query: () => "archives",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Archive" as const, id })),
              { type: "Archive", id: "LIST" },
            ]
          : [{ type: "Archive", id: "LIST" }],
    }),
    addArchive: build.mutation<IArchive, Partial<IArchive>>({
      query: (body) => ({
        url: `archives`,
        method: "ARCHIVE",
        body,
      }),
      invalidatesTags: [{ type: "Archive", id: "LIST" }],
    }),
    getArchive: build.query<IArchive, string>({
      query: (id) => `archives/${id}`,
      providesTags: (result, error, id) => [{ type: "Archive", id }],
    }),
    updateArchive: build.mutation<
      void,
      Pick<IArchive, "id"> & Partial<IArchive>
    >({
      query: ({ id, ...patch }) => ({
        url: `archives/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          archiveApi.util.updateQueryData("getArchive", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Archive", id }],
    }),
    deleteArchive: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `archives/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Archive", id }],
    }),
  }),
});

export const {
  useGetArchiveQuery,
  useGetArchivesQuery,
  useAddArchiveMutation,
  useUpdateArchiveMutation,
  useDeleteArchiveMutation,
} = archiveApi;
