import { IEquipment } from "@/@types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type EquipmentsResponse = IEquipment[];

export const equipmentsApi = createApi({
  reducerPath: "equipments",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Equipments"],
  endpoints: (build) => ({
    getEquipments: build.query<EquipmentsResponse, IEquipment>({
      query: () => "equipments",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Equipments" as const, id })),
              { type: "Equipments", id: "LIST" },
            ]
          : [{ type: "Equipments", id: "LIST" }],
    }),
    addEquipments: build.mutation<IEquipment, Partial<IEquipment>>({
      query: (body) => ({
        url: `equipments`,
        method: "Equipments",
        body,
      }),
      invalidatesTags: [{ type: "Equipments", id: "LIST" }],
    }),
    getEquipment: build.query<IEquipment, string>({
      query: (id) => `equipments/${id}`,
      providesTags: (result, error, id) => [{ type: "Equipments", id }],
    }),
    updateEquipments: build.mutation<
      void,
      Pick<IEquipment, "id"> & Partial<IEquipment>
    >({
      query: ({ id, ...patch }) => ({
        url: `equipments/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted(
        { id, ...patch }: Pick<IEquipment, "id"> & Partial<IEquipment>,
        {
          dispatch,
          queryFulfilled,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }: { dispatch: any; queryFulfilled: Promise<any> }
      ) {
        const patchResult = dispatch(
          equipmentsApi.util.updateQueryData(
            "getEquipments",
            id,
            (draft: IEquipment) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Equipments", id }],
    }),
    deleteEquipments: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `equipments/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Equipments", id }],
    }),
  }),
});

export const {
  useGetEquipmentQuery,
  useGetEquipmentsQuery,
  useAddEquipmentsMutation,
  useUpdateEquipmentsMutation,
  useDeleteEquipmentsMutation,
} = equipmentsApi;
