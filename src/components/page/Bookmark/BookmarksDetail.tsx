// import { useGetProjectsQuery } from "@/api/project";
import BookmarkTable from "./Table";

const bookmarkDetailTabTriggers = [
  {
    id: "tasks",
    label: "Tasks",
  },
  {
    id: "planning",
    label: "Planning",
  },
  {
    id: "resources",
    label: "Resource",
  },
  {
    id: "time-tracking",
    label: "Time Tracking",
  },
];

const planningTabTriggers = [
  {
    id: "kanban-board",
    label: "Kanban",
  },
  {
    id: "gantt-chart",
    label: "Gantt chart",
  },
];

const resourceTabTriggers = [
  {
    id: "inventories",
    label: "Inventories",
  },
  {
    id: "human-resources",
    label: "Human Resources",
  },
  {
    id: "equipments",
    label: "Equipments",
  },
  {
    id: "budgeting",
    label: "Budgeting",
  },
];
import BudgetDetail from "@/components/custom/BudgetTable/BudgetDetail";
import Tabs from "@/components/custom/common/Tabs/TabsWithBottomBorder/Tabs";
import EquipmentsDetail from "@/components/custom/EquipmentsTable/EquipmentDetail";
import HumanResourceDetail from "@/components/custom/HumanResourceTable/HumanResourceDetail";
import InventoriesDetail from "@/components/custom/InventoriesTable/InventoriesDetail";
import TasksKanbanBoard from "@/components/custom/common/Kanban/TasksKanbanBoard";
import TabWithButtonedTrigger from "@/components/custom/common/Tabs/TabsWithButtonedTrigger/TabsWithButtonedTrigger";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
// import { useGetBookmarkQuery } from "@/api/bookmark";
// import { useParams } from "react-router";
import { useGetTasksQuery } from "@/api/task";
const BookmarkDetail = () => {
  // const { bookmarkId } = useParams();
  // const { data: bookmark } = useGetBookmarkQuery(`${bookmarkId}`);
  const { data: tasks, isLoading } = useGetTasksQuery(``);
  console.log(tasks, "project data");
  if (isLoading || !tasks) return <Spinner />;
  return (
    <div className="my-[2rem]">
      <Tabs
        triggers={bookmarkDetailTabTriggers}
        contents={[
          {
            id: "tasks",
            element: <BookmarkTable tasks={tasks} />,
          },
          {
            id: "planning",
            element: (
              <TabWithButtonedTrigger
                className={`mt-[1rem]`}
                triggers={planningTabTriggers}
                contents={[
                  {
                    id: "gantt-chart",
                    element: <div>Gantt Chart</div>,
                  },
                  {
                    id: "kanban-board",
                    element: (
                      <div>
                        <h1 className="text-xl font-semibold mb-[1.5rem]">
                          Kanban Board
                        </h1>

                        <TasksKanbanBoard />
                      </div>
                    ),
                  },
                ]}
              />
            ),
          },
          {
            id: "resources",
            element: (
              <TabWithButtonedTrigger
                className={`mt-[1rem]`}
                triggers={resourceTabTriggers}
                contents={[
                  {
                    id: "inventories",
                    element: (
                      <div>
                        <InventoriesDetail />
                      </div>
                    ),
                  },
                  {
                    id: "human-resources",
                    element: (
                      <div>
                        <HumanResourceDetail />
                      </div>
                    ),
                  },
                  {
                    id: "equipments",
                    element: (
                      <div>
                        <EquipmentsDetail />
                      </div>
                    ),
                  },

                  {
                    id: "budgeting",
                    element: (
                      <div>
                        <BudgetDetail />
                      </div>
                    ),
                  },
                ]}
              />
            ),
          },
          {
            id: "time-tracking",
            element: <div>Time Tracking tab</div>,
          },
        ]}
      />
    </div>
  );
};

export default BookmarkDetail;
