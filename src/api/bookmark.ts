import { IBookmark } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type BookMarkResponse = IBookmark[];

export const bookmarkApi = createApi({
  reducerPath: "bookmark",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Bookmark"],
  endpoints: (build) => ({
    getBookmarks: build.query<BookMarkResponse, string>({
      query: () => "bookmarks",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Bookmark" as const, id })),
              { type: "Bookmark", id: "LIST" },
            ]
          : [{ type: "Bookmark", id: "LIST" }],
    }),
    addBookmark: build.mutation<IBookmark, Partial<IBookmark>>({
      query: (body) => ({
        url: `bookmarks`,
        method: "BOOKMARK",
        body,
      }),
      invalidatesTags: [{ type: "Bookmark", id: "LIST" }],
    }),
    getBookmark: build.query<IBookmark, string>({
      query: (id) => `bookmarks/${id}`,
      providesTags: (result, error, id) => [{ type: "Bookmark", id }],
    }),
    updateBookmark: build.mutation<
      void,
      Pick<IBookmark, "id"> & Partial<IBookmark>
    >({
      query: ({ id, ...patch }) => ({
        url: `bookmarks/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          bookmarkApi.util.updateQueryData("getBookmark", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Bookmark", id }],
    }),
    deleteBookmark: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `bookmarks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Bookmark", id }],
    }),
  }),
});

export const {
  useGetBookmarkQuery,
  useGetBookmarksQuery,
  useAddBookmarkMutation,
  useUpdateBookmarkMutation,
  useDeleteBookmarkMutation,
} = bookmarkApi;
