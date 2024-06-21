/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHumanResource, IProjectRowData } from "@/@types";
import ProgressBar from "@/components/custom/common/ProgressBar/ProgressBar";
import Tags from "@/components/custom/common/Tags/Tags";
import {
  CommentIcon,
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar/avatar";
import { getTagVariantForValues } from "@/lib/utils";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useGetHumanResourcesQuery } from "@/api/humanResource";
import Modal from "@/components/custom/common/Modal/Modal";
import AddCommentNew from "@/components/custom/common/AddCommentNew/AddCommentNew";
export const colDefs = [
  {
    field: "name",
    headerCheckboxSelection: true,
    headerName: "Task Name",
    checkboxSelection: true,
    editable: true,
    pinned: "left",
    filter: false,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
       
      const { workspaceId, projectId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/project/workspace/${workspaceId}/project/${projectId}/task/${p.data.id}`}>
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
    filter: "agNumberColumnFilter",
    editable: true,
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
    headerName: "Status",
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
    editable: true,
    cellEditor: "agSelectCellEditor",
    filter: "agSelectColumnFilter",

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
    field: "members",
    headerName: "Members",
    editable: true,
    cellEditor: "agSelectCellEditor",
    filter: "agSelectColumnFilter",
    cellEditorParams: (p: { value: { name: string }[] }) => {
      const { data, isLoading } = useGetHumanResourcesQuery({});
      console.log(p, "from my area");
      return {
        allowTyping: true,
        highlightMatch: true,
        searchType: "match",
        filterList: true,
        valueListMaxHeight: 220,
        // popup: true,
        values: (() => {
          if (isLoading || !data) return ["loading"];
          return [...p.value, ...data].map((person: IHumanResource) => {
            return person.name;
          });
        })(),
      };
    },
    filterParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["Member1", "Member2", "Member3", "Member4"],
    },
    cellRenderer: (p: { value: { avatar: string; name: string }[] }) => {
      const itemsToShow = 3;
      if (p.value.length > itemsToShow) {
        return (
          <div className="flex -space-x-2 items-center h-full ">
            {[
              ...p.value.slice(0, itemsToShow),
              { count: p.value.length - itemsToShow },
            ].map((user: any) => {
              return (
                <Avatar className="h-6 w-6 cursor-pointer ">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>
                    {user?.name?.slice(0, 1) || `+${user.count}`}
                  </AvatarFallback>
                </Avatar>
              );
            })}
          </div>
        );
      } else {
        return (
          <div className="flex -space-x-2 items-center h-full ">
            {p.value.map((user: any) => {
              return (
                <Avatar className="h-6 w-6 cursor-pointer ">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
                </Avatar>
              );
            })}
          </div>
        );
      }
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
       
      const { workspaceId, projectId } = useParams();
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer text-base"
          />
          <Link
            to={`/workspace/${workspaceId}/project/${projectId}/task/${p.data.id}/update`}>
            <EditIcon
              id={p.data.id}
              className="text-primary text-2xl cursor-pointer"
            />
          </Link>

          <Modal
            title={`Comments`}
            size="xl"
            trigger={
              <CommentIcon
                id={p.data.id}
                className="text-foreground/70 text-sm cursor-pointer"
              />
            }
            body={<AddCommentNew />}
          />
        </div>
      );
    },
  },
];
