import { IContact } from "@/@types/crm";
import { useDeleteContactMutation } from "@/api/contact";
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

const deleteContact = async () => {
  await useDeleteContactMutation;
};

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
    editable: true,
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["Not Started", "Pending", "On Progress", "Completed"],
    },
  },
  {
    field: "category",
    headerName: "Contact Category",
    editable: true,
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      allowTyping: true,
      highlightMatch: true,
      searchType: "match",
      filterList: true,
      valueListMaxHeight: 220,
      values: ["Not Started", "Pending", "On Progress", "Completed"],
    },
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
          <Link to={`/crm/contact/delete/${p.data.uuid}`}>
            <TrashIcon
              id={p.data.uuid}
              className="text-destructive cursor-pointer"
            />
          </Link>
          <Link to={`/crm/contact/update/${p.data.uuid}`}>
            <EditIcon
              id={p.data.uuid}
              className="text-primary text-lg cursor-pointer"
            />
          </Link>
          <EmailIconOutlined
            id={p.data.uuid}
            className="text-accent-foreground text-lg cursor-pointer"
          />
          <CallIconOutlined
            id={p.data.uuid}
            className="text-accent-foreground text-lg cursor-pointer"
          />
          <WhatsAppIconOutlined
            id={p.data.uuid}
            className="text-accent-foreground text-lg cursor-pointer"
          />
        </div>
      );
    },
  },
];
