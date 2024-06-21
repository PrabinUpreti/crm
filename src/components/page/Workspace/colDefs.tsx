import { IWorkspaceRowData } from "@/@types";
import ProgressBar from "@/components/custom/common/ProgressBar/ProgressBar";
import Tags from "@/components/custom/common/Tags/Tags";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import { getTagVariantForValues } from "@/lib/utils";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "name",
    headerCheckboxSelection: true,
    headerName: "Project Name",
    checkboxSelection: true,
    editable: true,
    pinned: "left",
    filter: false,
    cellRenderer: (p: { value: string; data: IWorkspaceRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/project/workspace/${workspaceId}/project/${p.data.id}`}>
          {p.value}
        </Link>
      );
    },
  },
  // { field: "createdBy", headerName: "Created By" },
  {
    field: "start_date",
    headerName: "Start Date",
    editable: true,
    cellEditor: "agDateCellEditor",
    valueFormatter: function (params: { value: Date }) {
      return moment(params.value).fromNow();
    },
    cellFormatter: (params: { value: Date }) => {
      return moment(params.value).fromNow();
    },
    filter: "agDateColumnFilter",
    // cellRenderer: (p: { value: string }) => {
    //   return <>{moment(p.value).fromNow()}</>;
    // },
  },
  {
    field: "due_date",
    headerName: "Due Date",
    filter: "agDateColumnFilter",
    cellEditor: "agDateCellEditor",
    editable: true,
    valueFormatter: function (params: { value: Date }) {
      return moment(params.value).fromNow();
    },
    cellFormatter: (params: { value: Date }) => {
      return moment(params.value).fromNow();
    },
    // cellRenderer: (p: { value: string }) => {
    //   return <>{moment(p.value).fromNow()}</>;
    // },
  },
  {
    field: "progress",
    editable: true,
    filter: "agNumberColumnFilter",
    cellRenderer: (p: { value: number }) => {
      return (
        <div className="flex items-center h-full">
          <ProgressBar
            className="w-full"
            value={p.value || 50}
            showValue={true}
          />
        </div>
      );
    },
  },
  {
    field: "status",
    editable: true,
    cellEditor: "agSelectCellEditor",
    filter: "agSelectColumnFilter",
    cellEditorParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["Not Started", "Pending", "On Progress", "Completed"],
    },
    filterParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["Not Started", "Pending", "On Progress", "Completed"],
    },
    headerName: "Status",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags value={p.value} variant={getTagVariantForValues(p.value)} />
        </div>
      );
    },
  },
  {
    field: "priority",
    headerName: "Priority",
    filter: "agSelectColumnFilter",
    editable: true,
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["High", "Medium", "Normal", "Low"],
    },
    filterParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["High", "Medium", "Normal", "Low"],
    },
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags value={p.value} variant={getTagVariantForValues(p.value)} />
        </div>
      );
    },
  },
  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,

    cellRenderer: (p: { value: string; data: IWorkspaceRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId } = useParams();
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer text-base"
          />
          <Link to={`/workspace/${workspaceId}/project/${p.data.id}/update`}>
            <EditIcon
              id={p.data.id}
              className="text-primary font-bold text-2xl cursor-pointer"
            />
          </Link>
        </div>
      );
    },
  },
];
