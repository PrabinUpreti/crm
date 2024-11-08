// import { useGetProjectsQuery } from "@/api/project";
// import BookmarkTable from "./Table";

// const bookmarkDetailTabTriggers = [
//   {
//     id: "tasks",
//     label: "Tasks",
//   },
//   {
//     id: "planning",
//     label: "Planning",
//   },
//   {
//     id: "resources",
//     label: "Resource",
//   },
//   {
//     id: "time-tracking",
//     label: "Time Tracking",
//   },
// ];

// const planningTabTriggers = [
//   {
//     id: "kanban-board",
//     label: "Kanban",
//   },
//   {
//     id: "gantt-chart",
//     label: "Gantt chart",
//   },
// ];

// const resourceTabTriggers = [
//   {
//     id: "inventories",
//     label: "Inventories",
//   },
//   {
//     id: "human-resources",
//     label: "Human Resources",
//   },
//   {
//     id: "equipments",
//     label: "Equipments",
//   },
//   {
//     id: "budgeting",
//     label: "Budgeting",
//   },
// ];
// import BudgetDetail from "@/components/custom/BudgetTable/BudgetDetail";
// import Tabs from "@/components/custom/common/Tabs/TabsWithBottomBorder/Tabs";
// import EquipmentsDetail from "@/components/custom/EquipmentsTable/EquipmentDetail";
// import HumanResourceDetail from "@/components/custom/HumanResourceTable/HumanResourceDetail";
// import InventoriesDetail from "@/components/custom/InventoriesTable/InventoriesDetail";
// import TasksKanbanBoard from "@/components/custom/common/Kanban/TasksKanbanBoard";
// import TabWithButtonedTrigger from "@/components/custom/common/Tabs/TabsWithButtonedTrigger/TabsWithButtonedTrigger";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";

import ContactTable from "./Table";
import { useGetContactsQuery } from "@/api/contact";
const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery(``);
  console.log(data, "project data");
  if (isLoading || !data)
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <div className="my-[2rem]">
      <ContactTable contacts={data} />,
    </div>
  );
};

export default ContactList;
