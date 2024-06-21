import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IHumanResourceRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const HumanResourceTable = ({ data }: { data: IHumanResourceRowData[] }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="">
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
              heading={"Human Resource"}
              handleSearch={handleSearch}
              dropdownMenus={dropdownMenus}
              createButtonText="Assign"
              createPagePath={`/project/humanResource/add`}
              hasSearch={true}
              search={<ProjectsTableSearch handleSearch={handleSearch} />}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
            />
          );
        }}
        rowData={data}
        heading={"Human Resources"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default HumanResourceTable;
