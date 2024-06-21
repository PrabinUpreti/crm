import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { IWorkspace } from "@/api/workspace";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { colDefs } from "./colDefs";
import { useParams } from "react-router";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import { ProjectsTableSearch } from "@/utils/constants";
import { useGetProjectsQuery } from "@/api/project";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const ProjectTable = ({ workspace }: { workspace: IWorkspace }) => {
  const { data, isLoading, isError } = useGetProjectsQuery("");
  const { workspaceId } = useParams();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error Occurred</div>;
  return (
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
            // quickAccessOptions={{ primaryOptions, secondaryOptions }}
            hasSearch={true}
            search={<ProjectsTableSearch handleSearch={handleSearch} />}
            heading={"Projects"}
            handleSearch={handleSearch}
            hasFilters={true}
            dropdownMenus={dropdownMenus}
            createPagePath={`/project/workspace/${workspaceId}/project/create`}
            createButtonText={"Project"}
            hasArchive={true}
            hasBookmark={true}
            hasNotification={true}
            isSideBarVisible={isSideBarVisible}
            setSideBarVisible={setSideBarVisible}
          />
        );
      }}
      rowData={data}
      heading={workspace.name}
      dropdownMenus={dropdownMenus}
      colDefs={colDefs}
      sidebar={true}
    />
  );
};

export default ProjectTable;
