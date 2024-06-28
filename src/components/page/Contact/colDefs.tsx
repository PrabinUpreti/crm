import { IContact } from "@/@types/crm";
import {
  CallIconOutlined,
  EditIcon,
  EmailIconOutlined,
  TrashIcon,
  WhatsAppIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import Tags from "@/components/custom/common/Tags/Tags";
import { getTagVariantForContacts } from "@/lib/utils";
import { Link } from "react-router-dom";
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
    filter: "agTextFilterColumn",
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
    filter: "agSelectFilterColumn",
  },
  {
    field: "category",
    headerName: "Contact Category",
    cellRenderer: (p: { value: string }) => {
      if (!p.value)
        return <div className="flex items-center justify-center">-</div>;
      return (
        <div>
          <Tags value={p.value} variant={getTagVariantForContacts(p.value)} />
        </div>
      );
    },
    filter: "agSelectFilterColumn",
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
