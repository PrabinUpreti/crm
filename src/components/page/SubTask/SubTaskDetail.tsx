import { ITask } from "@/@types";
import TaskDetailTable from "./Table";

const taskDetailTabTriggers = [
  {
    id: "sub-tasks",
    label: "Sub Tasks",
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
import { useGetTasksQuery } from "@/api/task";
import BudgetDetail from "@/components/custom/BudgetTable/BudgetDetail";
import Tabs from "@/components/custom/common/Tabs/TabsWithBottomBorder/Tabs";
import EquipmentsDetail from "@/components/custom/EquipmentsTable/EquipmentDetail";
import HumanResourceDetail from "@/components/custom/HumanResourceTable/HumanResourceDetail";
import InventoriesDetail from "@/components/custom/InventoriesTable/InventoriesDetail";
import { KanbanBoard } from "@/components/custom/common/Kanban/TasksKanbanBoard";
import TimeTrackingDetail from "./TimeTrackingDetail";
import TabWithButtonedTrigger from "@/components/custom/common/Tabs/TabsWithButtonedTrigger/TabsWithButtonedTrigger";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
// import { useParams } from "react-router";
const TaskDetail = () => {
  // const { workspaceId, projectId, taskId } = useParams();
  const { data, isLoading } = useGetTasksQuery();

  if (isLoading || !data) return <Spinner />;

  const firstTask: ITask = data[0];

  return (
    <div className="my-[2rem]">
      <Tabs
        triggers={taskDetailTabTriggers}
        contents={[
          {
            id: "sub-tasks",
            element: <TaskDetailTable task={firstTask} />,
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

                        <KanbanBoard />
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
            element: (
              <div>
                <TimeTrackingDetail task={firstTask} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default TaskDetail;
