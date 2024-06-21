import { IProjectRowData } from "@/@types";

import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import { Link, useParams } from "react-router-dom";
import Tags from "../common/Tags/Tags";
import { faker } from "@faker-js/faker";
export const colDefs = [
  {
    field: "name",
    pinned: "left",
    headerCheckboxSelection: true,
    headerName: "Name",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId, projectId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/workspace/${workspaceId}/project/${projectId}/task/${p.data.id}`}
        >
          {p.value}
        </Link>
      );
    },
  },
  {
    field: "category",
    filter: true,
    headerName: "Category",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags
            className="py-1"
            value={p.value}
            variant={faker.helpers.arrayElement([
              "dark",
              "indigo",
              "purple",
              "red",
              "green",
              "pink",
              "yellow",
              "primary",
              "dark",
            ])}
          />
        </div>
      );
    },
  },
  {
    field: "status",
    filter: true,
    headerName: "Status",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags
            className="py-1"
            value={p.value}
            variant={faker.helpers.arrayElement([
              "dark",
              "indigo",
              "purple",
              "red",
              "green",
              "pink",
              "yellow",
              "primary",
              "dark",
            ])}
          />
        </div>
      );
    },
  },
  // {
  //   field: "unitPrice",
  // },
  {
    field: "quantity",
    filter: true,
  },
  // {
  //   field: "totalPrice",
  // },
  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,

    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer text-base"
          />
          <EditIcon
            id={p.data.id}
            className="text-primary text-2xl cursor-pointer"
          />
        </div>
      );
    },
  },
];
