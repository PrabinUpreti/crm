/* eslint-disable @typescript-eslint/no-unused-vars */
 
import { IHumanResourceRowData, IProjectRowData } from "@/@types";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import Tags from "../common/Tags/Tags";
import { faker } from "@faker-js/faker";
import moment from "moment";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar/avatar";
export const colDefs = [
  {
    field: "name",
    headerCheckboxSelection: true,
    pinned: "left",
    headerName: "Full Name",
    minWidth: 220,
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
       
      // const { humanResourceId } = useParams();
      return (
        // <Link
        //   className="hover:underline"
        //   to={`/humanResource/${humanResourceId}`}>
        //   {p.value}
        // </Link>
        p.value
      );
    },
  },
  {
    field: "avatar",
    headerName: "Avatar",
    maxWidth: 120,
    cellRenderer: (p: { value: string; data: IHumanResourceRowData }) => {
      return (
        <div className="flex  items-center h-full ">
          <Avatar className="h-8 w-8 cursor-pointer ">
            <AvatarImage src={p.value} />
            <AvatarFallback>{p.data.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    field: "job_title",
    headerName: "Job Title",
    filter: true,
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
  //   field: "allocatedEffort",
  // },
  {
    field: "department",
    filter: true,
    headerName: "Department",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags
            className="py-1"
            value={faker.helpers.arrayElement([
              "Sales",
              "Marketing",
              "Development",
              "Management",
            ])}
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
    headerName: "Start Date",
    filter: "agDateColumnFilter",
    field: "start_date",
    cellRenderer: (p: { value: Date }) => {
      return moment(p.value).fromNow();
    },
  },
  {
    headerName: "Due Date",
    filter: "agDateColumnFilter",
    field: "due_date",
    cellRenderer: (p: { value: Date }) => {
      return moment(p.value).fromNow();
    },
  },
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
            className="text-primary text-2xl cursor-pointer "
          />
        </div>
      );
    },
  },
];
