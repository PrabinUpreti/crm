import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ITaskRowData } from "@/@types";
import { IContact } from "@/@types/crm";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const ContactTable = ({ contacts }: { contacts: IContact[] }) => {
  const handleSearch = () => {};
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        TableToolbarHOC={({
          isSideBarVisible,
          setSideBarVisible,
        }: {
          isSideBarVisible: () => boolean;
          setSideBarVisible: (value: boolean) => void;
        }) => {
          return (
            <TableToolbar
              heading={`Contacts`}
              hasSearch={true}
              handleSearch={handleSearch}
              dropdownMenus={dropdownMenus}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
              // createButtonText={null}
              // createPagePath="/workspace/:workspaceId/bookmark/:bookmarkId/task/create"
            />
          );
        }}
        rowData={contacts}
        heading={`Contacts`}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default ContactTable;
