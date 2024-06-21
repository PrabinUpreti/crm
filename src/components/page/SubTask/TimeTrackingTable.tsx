import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./timeTrackingColDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ITimeTrackingRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const TimeTrackingTable = ({
  timeTrackings,
}: {
  timeTrackings: ITimeTrackingRowData[];
}) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
              heading={`Time Tracking`}
              createButtonText="Start Timer"
              handleSearch={handleSearch}
              dropdownMenus={dropdownMenus}
              hasArchive={true}
              hasBookmark={true}
              hasNotification={true}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
            />
          );
        }}
        rowData={timeTrackings}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
        sideBar={"filters"}
      />
    </div>
  );
};

export default TimeTrackingTable;
