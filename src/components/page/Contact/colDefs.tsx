import { IProjectRowData } from "@/@types";
import {
  CallIconOutlined,
  EditIcon,
  EmailIconOutlined,
  TrashIcon,
  WhatsAppIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import Tags from "@/components/custom/common/Tags/Tags";
import { getTagVariantForContacts } from "@/lib/utils";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: ["first_name"],

    headerCheckboxSelection: true,
    headerName: "First Name",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return (
        <Link className="hover:underline" to={`/crm/contact/${p.data.id}`}>
          {p.value}
        </Link>
      );
    },
  },
  // { field: "createdBy", headerName: "Created By" },
  {
    field: "last_name",
    headerName: "Last Name",
  },
  {
    field: "phone",
    headerName: "Phone",
  },
  {
    field: "email",
    headerName: "Email",
  },
  {
    field: "address",
    headerName: "Address",
  },
  {
    field: "customer_type",
    headerName: "Type",
    cellRenderer: (p: { value: string }) => {
      console.log(p);

      return (
        <div>
          <Tags value={p.value} variant={getTagVariantForContacts(p.value)} />
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

    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
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
          <EmailIconOutlined
            id={p.data.id}
            className="text-accent-foreground text-lg cursor-pointer"
          />
          <CallIconOutlined
            id={p.data.id}
            className="text-accent-foreground text-lg cursor-pointer"
          />
          <WhatsAppIconOutlined
            id={p.data.id}
            className="text-accent-foreground text-lg cursor-pointer"
          />
        </div>
      );
    },
  },
];
