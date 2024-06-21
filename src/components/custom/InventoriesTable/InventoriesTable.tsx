import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IInventoriesRowData } from "@/@types";
import { Button } from "@/components/plate-ui/button";
import { PlusIcon } from "../common/icons/commonIcons";
import AssignInventoryStepperForm from "./AssignInventoryStepperForm";
import { ProjectsTableSearch } from "@/utils/constants";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const InventoriesTable = ({
  inventories,
}: {
  inventories: IInventoriesRowData[];
}) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log(inventories, "inventories");

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
              heading={"Inventories"}
              handleSearch={handleSearch}
              dropdownMenus={dropdownMenus}
              createButtonText="Inventory"
              // createPagePath={`/inventory/create`}
              type="modal"
              modal={{
                size: "lg",
                title: "Assign Inventory",
                description:
                  "You can assign the inventories from here to your project",
                trigger: (
                  <Button
                    size={"icon"}
                    className="flex gap-2 rounded-full h-[2.4rem] w-[2.4rem]"
                  >
                    <PlusIcon />
                    {/* <span>Inventory</span> */}
                  </Button>
                ),
                body: (
                  <div className="flex flex-col gap-4">
                    <AssignInventoryStepperForm />
                  </div>
                ),
              }}
              hasSearch={true}
              search={<ProjectsTableSearch handleSearch={handleSearch} />}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
            />
          );
        }}
        rowData={inventories}
        heading={"Inventories"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
        sideBar={"filters"}
      />
    </div>
  );
};

export default InventoriesTable;
