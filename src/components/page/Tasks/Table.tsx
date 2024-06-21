import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ITaskRowData } from "@/@types";
import { ProjectsTableFilters, ProjectsTableSearch } from "@/utils/constants";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import { useGetSubTasksQuery } from "@/api/subTask";
import { useParams } from "react-router";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const TaskTable = ({ task }: { task: ITaskRowData }) => {
  const { data, isLoading, isError } = useGetSubTasksQuery("");
  const { workspaceId, projectId, taskId } = useParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error Occurred</div>;
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
              heading={task.name}
              hasSearch={true}
              search={<ProjectsTableSearch handleSearch={handleSearch} />}
              dropdownMenus={dropdownMenus}
              createButtonText="Task"
              createPagePath={`/project/workspace/${workspaceId}/project/${projectId}/task/${taskId}/subTask/create`}
              hasFilters={true}
              filters={<ProjectsTableFilters />}
              hasArchive={true}
              hasBookmark={true}
              hasNotification={true}
              handleSearch={handleSearch}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
            />
          );
        }}
        rowData={data}
        heading={task.name}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
        sideBar={"filters"}
      />
      ;
    </div>
  );
};

export default TaskTable;
