import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IContact } from "@/@types/crm";
import { ProjectsTableSearch } from "@/utils/constants";

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
              search={<ProjectsTableSearch handleSearch={handleSearch} />}
              handleSearch={handleSearch}
              dropdownMenus={dropdownMenus}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
              // createButtonText={null}
              createPagePath="/crm/contact/create"
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
