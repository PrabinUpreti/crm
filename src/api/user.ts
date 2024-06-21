import { TRole } from "@/@types";
import { setUser } from "@/redux/features/app/appSlice";
import { REAL_API_BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IProject {
  id: string;
  name: string;
  createdBy: string;
  start_date: Date;
  status: "On Progress" | "Not Started" | "Completed" | "Pending";
  due_date: Date;
  priority: "Low" | "Normal" | "High";
}

export interface IUser {
  id?: string;
  name?: string;
  projects?: [];
}

export interface ILoginRequest {
  email: string;
  password?: string;
}

export interface ILoginResponse {
  data: {
    email: string | null;
    role: TRole | null;
    name: string | null;
    username: string;
    access: string | null;
    refresh: string | null;
  };
  message: string;
  status: string;
}

export interface ILogoutResponse {
  status: string;
  message: string;
}
type UserResponse = IUser[];

export const userApi = createApi({
  reducerPath: "users",

  baseQuery: fetchBaseQuery({
    baseUrl: `${REAL_API_BASE_URL}/accounts`,
    credentials: "include",
    headers: {
      authorization: localStorage.getItem(`access`) ?? ``,
      [`X-CSRFToken`]: localStorage.getItem(`access`) ?? ``,
    },
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUsers: build.query<UserResponse, string>({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User" as const, id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
    addUser: build.mutation<IUser, Partial<IUser>>({
      query: (body) => ({
        url: `Users`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    loginUser: build.mutation<ILoginResponse, ILoginRequest>({
      query: (body) => ({
        url: `/login/`,
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const user = {
            email: data.data.email,
            role: data.data.role ?? `admin`,
            name: data.data.name ?? `Admin`,
            username: data.data.username ?? "admin",
          };
          data.data.access && localStorage.setItem(`access`, data.data.access);
          data.data.refresh &&
            localStorage.setItem(`refresh`, data.data.refresh);
          localStorage.setItem(`user`, JSON.stringify(user));
          const patchResult = dispatch(
            setUser({
              user: user,
              access: data.data.access,
              refresh: data.data.refresh,
            })
          );
          console.log(patchResult);
        } catch (err) {
          console.log(err);
        }
      },
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    // logout
    logoutUser: build.query<ILogoutResponse, void>({
      query: () => {
        return `/logout/`;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          localStorage.removeItem(`access`);
          localStorage.removeItem(`refresh`);
          localStorage.removeItem(`user`);
          dispatch(
            setUser({
              user: null,
              access: null,
              refresh: null,
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUser: build.query<IUser, string | undefined>({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    updateUser: build.mutation<void, Pick<IUser, "id"> & Partial<IUser>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          userApi.util.updateQueryData("getUser", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),
    deleteUser: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  usePrefetch,
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useLogoutUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
} = userApi;
