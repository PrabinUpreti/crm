import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IBudgetRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";
import { useParams } from "react-router";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
};
const BudgetTable = ({ budgets }: { budgets: IBudgetRowData[] }) => {
  return (
    <div className="">
      <AgGridTable
        TableToolbarHOC={TableToolbarHOC}
        rowData={budgets}
        heading={"Budget"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};
const TableToolbarHOC = ({
  isSideBarVisible,
  setSideBarVisible,
}: {
  isSideBarVisible: () => boolean;
  setSideBarVisible: (value: boolean) => void;
}) => {
  const { workspaceId, projectId } = useParams();

  return (
    <TableToolbar
      heading={"Budget"}
      handleSearch={handleSearch}
      dropdownMenus={dropdownMenus}
      createButtonText="Budget"
      createPagePath={`/project/workspace/${workspaceId}/project/${projectId}/budget/create`}
      hasSearch={true}
      search={<ProjectsTableSearch handleSearch={handleSearch} />}
      isSideBarVisible={isSideBarVisible}
      setSideBarVisible={setSideBarVisible}
    />
  );
};

export default BudgetTable;
