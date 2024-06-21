import TaskDetailTable from "./Table";

import {
  ArchiveIconFilled,
  ArchiveIconOutlined,
  BookmarkIconOutlined,
  CalendarIcon,
  CopyIconOutlined,
  DropIconOutlined,
  EditIcon,
  EllipsisIconHorizontal,
  FlagIconOutlined,
  InventoryIconOutlined,
  LinkIconOutlined,
  MagicIconOutlined,
  MoneyIconOutlined,
  NotificationIconOutlined,
  PeopleIconOutlined,
  SettingIcon,
  StarIconFilled,
  StarIconOutlined,
  UserIconOutlined,
} from "@/components/custom/common/icons/commonIcons";

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
  // {
  //   id: "gantt-chart",
  //   label: "Gantt chart",
  // },
  {
    id: "files",
    label: "Files",
  },
];

const resourceTabTriggers = [
  {
    id: "inventories",
    label: "Inventories",
    icon: <InventoryIconOutlined className="text-xl" />,
  },
  {
    id: "human-resources",
    label: "Human Resources",
    icon: <PeopleIconOutlined className="text-xl" />,
  },
  {
    id: "equipments",
    label: "Equipments",
    icon: <InventoryIconOutlined className="text-xl" />,
  },
  {
    id: "budgets",
    label: "Budgets",
    icon: <MoneyIconOutlined className="text-xl" />,
  },
];

export const secondaryOptions = [
  {
    label: "Rename",
    id: "rename",
    icon: <EditIcon />,
    isLink: false,
  },
  {
    label: "Copy Link",
    id: "copy-link",
    icon: <LinkIconOutlined />,
    isLink: false,
  },
  {
    label: "Duplicate",
    id: "duplicate",
    icon: <CopyIconOutlined />,
    isLink: false,
  },
  {
    label: "Settings",
    id: "settings",
    icon: <SettingIcon />,
    isLink: false,
  },
  {
    label: "Templates",
    id: "templates",
    icon: <MagicIconOutlined />,
    isLink: false,
  },
];
export const primaryOptions = [
  {
    label: "Color",
    id: "color",
    icon: <DropIconOutlined className="cursor-pointer text-foreground/80" />,
    isLink: false,
  },
  {
    label: "Members",
    id: "members",
    icon: <UserIconOutlined className="cursor-pointer text-foreground/80" />,
    isLink: false,
  },
  {
    label: "Calendar",
    id: "calendar",
    icon: <CalendarIcon className="cursor-pointer text-foreground/80" />,
    isLink: false,
  },
  {
    label: "Priority",
    id: "priority",
    icon: <FlagIconOutlined className="cursor-pointer text-foreground/80" />,
    isLink: false,
  },
  {
    label: "Archive",
    id: "archive",
    icon: <ArchiveIconOutlined className="cursor-pointer text-foreground/80" />,
    isLink: false,
  },
  {
    label: "Bookmark",
    id: "bookmark",
    icon: (
      <BookmarkIconOutlined className="cursor-pointer text-foreground/80" />
    ),
    isLink: false,
  },
];

const quickAccessOptions = {
  primaryOptions,
  secondaryOptions,
};
import BudgetDetail from "@/components/custom/BudgetTable/BudgetDetail";
import Tabs from "@/components/custom/common/Tabs/TabsWithBottomBorder/Tabs";
import EquipmentsDetail from "@/components/custom/EquipmentsTable/EquipmentDetail";
import HumanResourceDetail from "@/components/custom/HumanResourceTable/HumanResourceDetail";
import InventoriesDetail from "@/components/custom/InventoriesTable/InventoriesDetail";
import TasksKanbanBoard from "@/components/custom/common/Kanban/TasksKanbanBoard";
import TimeTrackingDetail from "./TimeTrackingDetail";
import TabWithButtonedTrigger from "@/components/custom/common/Tabs/TabsWithButtonedTrigger/TabsWithButtonedTrigger";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Files from "@/components/custom/common/Files/Files";
import { useParams } from "react-router";
import { useState } from "react";
import { getSuccessToast } from "@/utils/constants/toast";
import { useTheme } from "@/components/Providers/Theme/ThemeProvider";
import IconDropdown from "@/components/custom/common/Dropdowns/IconDropdown/IconDropdown";
import { useGetTaskQuery } from "@/api/task";
// import { useParams } from "react-router";
const TaskDetail = () => {
  // const { workspaceId, projectId, taskId } = useParams();
  const { taskId } = useParams();
  const { data, isLoading, isError } = useGetTaskQuery(taskId);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const { theme } = useTheme();

  const toggleBookmark = () => {
    if (isBookmarked) {
      getSuccessToast("Removed from bookmarks", theme);
    } else {
      getSuccessToast("Bookmarked", theme);
    }

    setIsBookmarked((prev) => !prev);
  };

  const toggleArchive = () => {
    if (isArchived) {
      getSuccessToast("Removed from archived", theme);
    } else {
      getSuccessToast("Archived", theme);
    }

    setIsArchived((prev) => !prev);
  };

  if (isLoading || !data) return <Spinner />;

  if (isError) return <div>Error Occurred</div>;

  return (
    <div className="my-[2rem]">
      <div className="flex items-center gap-[2rem] mb-[1rem] mt-[1.5rem] bg-primary/10 p-[1rem] rounded-lg group">
        <h2 className="text-nowrap text-xl font-semibold text-primary">
          {data && data.name}
        </h2>

        <div className="flex items-center gap-[1rem]  group-hover:flex">
          {quickAccessOptions?.primaryOptions?.find(
            (item) => item.id === "bookmark"
          ) && (
            <div className="flex gap-2  ">
              {isBookmarked ? (
                <StarIconFilled
                  onClick={toggleBookmark}
                  className="text-orange-400 text-lg cursor-pointer"
                />
              ) : (
                <StarIconOutlined
                  onClick={toggleBookmark}
                  className="text-gray-500 text-lg cursor-pointer"
                />
              )}

              {/* <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" /> */}
            </div>
          )}

          {quickAccessOptions &&
            quickAccessOptions?.primaryOptions?.find(
              (item) => item.id === "archive"
            ) && (
              <div className="flex gap-2  ">
                {isArchived ? (
                  <ArchiveIconFilled
                    onClick={toggleArchive}
                    className="text-primary text-lg cursor-pointer"
                  />
                ) : (
                  <ArchiveIconOutlined
                    onClick={toggleArchive}
                    className="text-gray-500 text-lg cursor-pointer"
                  />
                )}

                {/* <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" /> */}
              </div>
            )}
          {quickAccessOptions?.primaryOptions?.find(
            (item) => item.id === "notification"
          ) && (
            <NotificationIconOutlined className="text-2xl  text-gray-500 cursor-pointer" />
          )}

          {quickAccessOptions?.primaryOptions
            ?.filter(
              (item) =>
                item.id !== "bookmark" &&
                item.id !== "archive" &&
                item.id !== "notification"
            )
            .map((item) => item.icon)}

          <IconDropdown
            menu={{ items: secondaryOptions }}
            icon={<EllipsisIconHorizontal className="relative" />}
          />
        </div>
      </div>
      <Tabs
        triggers={taskDetailTabTriggers}
        contents={[
          {
            id: "sub-tasks",
            element: <TaskDetailTable task={data} />,
          },
          {
            id: "planning",
            element: (
              <TabWithButtonedTrigger
                className={`mt-[1rem]`}
                triggers={planningTabTriggers}
                contents={[
                  // {
                  //   id: "gantt-chart",
                  //   element: <div>Gantt Chart</div>,
                  // },

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
                  {
                    id: "files",
                    element: (
                      <div>
                        <h1 className="text-xl font-semibold my-[1.5rem]">
                          Files
                        </h1>
                        <Files />
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
                    id: "budgets",
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
                <TimeTrackingDetail task={data} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default TaskDetail;
