import { IProjectRowData } from "@/@types";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "name",
    headerCheckboxSelection: true,
    headerName: "Budget Name",
    pinned: "left",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { budgetId } = useParams();
      return (
        <Link className="hover:underline" to={`/project/budget/${budgetId}`}>
          {p.value}
        </Link>
      );
    },
  },

  {
    headerName: "Amount",
    filter: true,
    field: "allocated_amount",
  },
  {
    headerName: "Last Used",
    filter: "agDateColumnFilter",
    field: "last_used",
    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).fromNow()}</>;
    },
  },
  {
    headerName: "Spent",
    filter: true,
    field: "spent_amount",
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
            className="text-primary text-2xl cursor-pointer"
          />
        </div>
      );
    },
  },
];
