import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ITaskRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const BookmarkTable = ({ tasks }: { tasks: ITaskRowData[] }) => {
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
              heading={`Tasks`}
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
        rowData={tasks}
        heading={`Tasks`}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default BookmarkTable;
