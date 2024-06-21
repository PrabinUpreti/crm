import { ISubTaskRowData } from "@/@types";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "id",
    headerCheckboxSelection: true,
    headerName: "Tracking ID",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: ISubTaskRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId, projectId, taskId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/workspace/${workspaceId}/project/${projectId}/task/${taskId}/subTask/${p.data.id}`}>
          {p.value}
        </Link>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",

    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).format("LL")}</>;
    },
  },
  { field: "created_by", headerName: "Created By" },
  {
    field: "start_time",
    headerName: "Start Time",

    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).format("hh:mm")}</>;
    },
  },
  {
    field: "end_time",
    headerName: "End Time",
    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).format("hh:mm")}</>;
    },
  },

  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,

    cellRenderer: (p: { value: string; data: ISubTaskRowData }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer text-base"
          />
          <EditIcon
            id={p.data.id}
            className="text-primary font-bold text-2xl cursor-pointer"
          />
        </div>
      );
    },
  },
];
