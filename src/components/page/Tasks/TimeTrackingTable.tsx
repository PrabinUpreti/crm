import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./timeTrackingColDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ProjectsTableFilters, ProjectsTableSearch } from "@/utils/constants";
import { useGetTimeTrackingsQuery } from "@/api/timeTracking";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
// import Timer from "@/components/custom/common/Timer/Timer";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const TimeTrackingTable = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const { data, isLoading, isError } = useGetTimeTrackingsQuery("");

  if (isLoading)
    <div>
      <Spinner />
    </div>;

  if (isError) return <div>Error Occurred</div>;
  return (
    <div className="mt-[2rem]">
      {/* <Timer /> */}

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
              heading={`Time Tracking`}
              createButtonText="Start Timer"
              hasSearch={true}
              search={<ProjectsTableSearch handleSearch={handleSearch} />}
              dropdownMenus={dropdownMenus}
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
        heading={`Time Tracking`}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
        sideBar={"filters"}
      />
    </div>
  );
};

export default TimeTrackingTable;
