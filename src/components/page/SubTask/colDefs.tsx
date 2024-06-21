/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISubTaskRowData } from "@/@types";
import ProgressBar from "@/components/custom/common/ProgressBar/ProgressBar";
import Tags from "@/components/custom/common/Tags/Tags";
import {
  CommentIcon,
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import { Avatar, AvatarImage } from "@/components/ui/Avatar/avatar";
import { getTagVariantForValues } from "@/lib/utils";
import { users } from "@/utils/constants";
import { AvatarFallback } from "@radix-ui/react-avatar";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

export const colDefs = [
  {
    field: "subTaskName",
    headerCheckboxSelection: true,
    headerName: "Name",
    checkboxSelection: true,
    editable: true,
    pinned: "left",
    filter: false,
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
  // { field: "createdBy", headerName: "Created By" },
  {
    field: "members",
    headerName: "Members",
    editable: true,
    cellEditor: "agSelectCellEditor",
    filter: "agSelectColumnFilter",
    cellEditorParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["Member1", "Member2", "Member3", "Member4"],
    },
    filterParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["Member1", "Member2", "Member3", "Member4"],
    },
    cellRenderer: () => {
      return (
        <div className="flex -space-x-2 items-center h-full ">
          {users.map((user: any) => {
            return (
              <Avatar className="h-6 w-6 cursor-pointer ">
                <AvatarImage src={user.profile_pic} />
                <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
              </Avatar>
            );
          })}
        </div>
      );
    },
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

    cellRenderer: (p: { value: string; data: ISubTaskRowData }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer"
          />
          <EditIcon
            id={p.data.id}
            className="text-primary text-lg cursor-pointer"
          />
          <CommentIcon
            id={p.data.id}
            className="text-primary text-lg cursor-pointer"
          />
        </div>
      );
    },
  },
];
