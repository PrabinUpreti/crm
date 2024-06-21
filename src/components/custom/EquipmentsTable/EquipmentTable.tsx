import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IEquipmentRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";
import { Button } from "@/components/ui/Button/button";
import { PlusIcon } from "../common/icons/commonIcons";
import AssignEquipmentStepperForm from "../HumanResourceTable/AssignEquipmentStepperForm";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const EquipmentTable = ({
  equipments,
}: {
  equipments: IEquipmentRowData[];
}) => {
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
              heading={"Equipment"}
              handleSearch={handleSearch}
              dropdownMenus={dropdownMenus}
              createButtonText="Equipment"
              createPagePath={`/project/equipment/create`}
              hasSearch={true}
              search={<ProjectsTableSearch handleSearch={handleSearch} />}
              type="modal"
              modal={{
                size: "lg",
                title: "Assign Equipments",
                description:
                  "You can assign the inventories from here to your project",
                trigger: (
                  <Button
                    size={"icon"}
                    className="flex gap-2 rounded-full h-[2.4rem] w-[2.4rem]"
                  >
                    <PlusIcon />
                    {/* <span>Equipments</span> */}
                  </Button>
                ),
                body: (
                  <div className="flex flex-col gap-4">
                    <AssignEquipmentStepperForm />
                  </div>
                ),
              }}
              isSideBarVisible={isSideBarVisible}
              setSideBarVisible={setSideBarVisible}
            />
          );
        }}
        rowData={equipments}
        heading={"Equipment"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default EquipmentTable;
