import { IProjectRowData } from "@/@types";
import { IContact } from "@/@types/crm";
import {
  CallIconOutlined,
  EditIcon,
  EmailIconOutlined,
  FacebookIconOutlined,
  InstagramIconOutlined,
  LinkIconOutlined,
  TrashIcon,
  WhatsAppIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import Tags from "@/components/custom/common/Tags/Tags";
import { getTagVariantForContacts } from "@/lib/utils";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "first_name",

    headerCheckboxSelection: true,
    headerName: "Name",
    checkboxSelection: true,
    cellRenderer: (p: { data: IContact }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return (
        <Link className="hover:underline" to={`/crm/contact/${p.data.uuid}`}>
          {p.data.first_name} {p.data.last_name}
        </Link>
      );
    },
  },
  // { field: "createdBy", headerName: "Created By" },

  {
    field: "phone",
    headerName: "Phone",
  },
  {
    field: "address",
    headerName: "Address",
    cellRenderer: (p: { data: IContact }) => {
      return (
        <div>
          <p>
            {p.data.city} {p.data.country}
          </p>
        </div>
      );
    },
  },
  {
    field: "company_name",
    headerName: "Company",
  },
  {
    field: "opportunity",
    headerName: "Type",
    cellRenderer: (p: { value: string }) => {
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

    cellRenderer: (p: { value: string; data: IContact }) => {
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
