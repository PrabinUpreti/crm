import { IContact } from "@/@types/crm";
import { useDeleteContactMutation } from "@/api/contact";
import AlertDialog from "@/components/custom/common/AlertDialog/AlertDialog";
import {
  CallIconOutlined,
  EditIcon,
  EmailIconOutlined,
  TrashIcon,
  WhatsAppIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import Tags from "@/components/custom/common/Tags/Tags";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
      const [deleteContact] = useDeleteContactMutation();
      // delete contact handler
      const handleDelete = (uuid: string) => {
        console.log("clicked");
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: <p>Confirm Delete</p>,
          text: "Are you sure you want to delete this contact",
          icon: "warning",
          showDenyButton: true,
          showCloseButton: true,
          showConfirmButton: true,
          focusConfirm: false,
          focusCancel: true,
        }).then((result) => {
          if (result.isConfirmed) {
            deleteContact(uuid);
          }

          return console.log(result);
        });
      };

      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            onClick={() => handleDelete(p.data.uuid ?? "1")}
            id={p.data.uuid}
            className="text-destructive cursor-pointer"
          />
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
