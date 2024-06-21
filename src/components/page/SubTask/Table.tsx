import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ITaskRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";
import { useParams } from "react-router-dom";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const TaskTable = ({ task }: { task: ITaskRowData }) => {
  const { workspaceId, projectId } = useParams();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (!task) return "loading...";
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
              hasFilters={true}
              // filters={<ProjectsTableFilters />}
              hasSearch={true}
              search={<ProjectsTableSearch handleSearch={handleSearch} />}
              heading={"Tasks"}
              handleSearch={handleSearch}
              dropdownMenus={dropdownMenus}
              createButtonText="Task"
              createPagePath={`/project/workspace/${workspaceId}/project/${projectId}/task/create`}
              hasArchive={true}
              hasBookmark={true}
              hasNotification={true}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
            />
          );
        }}
        // rowData={data}
        heading={"Tasks"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
        sideBar={"filters"}
      />
    </div>
  );
};

export default TaskTable;
