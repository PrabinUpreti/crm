import ProjectDetailTable from "./Table";

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
  LinkIconOutlined,
  MagicIconOutlined,
  NotificationIconOutlined,
  SettingIcon,
  StarIconFilled,
  StarIconOutlined,
  TimelineIcon,
  UserIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import IconDropdown from "@/components/custom/common/Dropdowns/IconDropdown/IconDropdown";

// tab triggers
const projectDetailTabTriggers = [
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
    label: "Time Tracking Analysis",
  },
];

const planningTabTriggers = [
  {
    id: "tasks-board",
    label: "Tasks ",
    icon: <KanbanIconOutlined className="text-xl" />,
  },
  {
    id: "milestones-board",
    label: "Milestones ",
    icon: <KanbanIconOutlined className="text-xl" />,
  },
  {
    id: "gantt-chart",
    label: "Gantt chart",
    icon: <GanttChartIconOutlined className="text-xl" />,
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: <TimelineIcon className="text-xl" />,
  },
  {
    id: "files",
    label: "Files",
    icon: <FolderIconOutlined className="text-xl" />,
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
    label: "Milestones",
    id: "milestones",
    // icon: (
    //   <MilestoneIcon className="cursor-pointe text-lg text-foreground/80" />
    // ),
    element: <Milestones />,
    isLink: false,
  },
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
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Tabs from "@/components/custom/common/Tabs/TabsWithBottomBorder/Tabs";
import TabWithButtonedTrigger from "@/components/custom/common/Tabs/TabsWithButtonedTrigger/TabsWithButtonedTrigger";
import EquipmentsDetail from "@/components/custom/EquipmentsTable/EquipmentDetail";
import HumanResourceDetail from "@/components/custom/HumanResourceTable/HumanResourceDetail";
import InventoriesDetail from "@/components/custom/InventoriesTable/InventoriesDetail";
import TasksKanbanBoard from "@/components/custom/common/Kanban/TasksKanbanBoard";
import MilestonesKanbanBoard from "@/components/custom/common/Kanban/MilestonesKanbanBoard";
import { useParams } from "react-router";
import GanttChart from "@/components/custom/common/charts/GanttChart/GanttChart";
import { Helmet } from "react-helmet";
import { useTheme } from "@/components/Providers/Theme/ThemeProvider";
import Files from "@/components/custom/common/Files/Files";
import {
  FolderIconOutlined,
  GanttChartIconOutlined,
  InventoryIconOutlined,
  KanbanIconOutlined,
  MoneyIconOutlined,
  PeopleIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import { useState } from "react";
import { getSuccessToast } from "@/utils/constants/toast";
import { useGetProjectQuery } from "@/api/project";
import Timeline from "@/components/custom/common/Timeline/Timeline";
import Milestones from "./Milestones";
const ProjectDetail = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { workspaceId, projectId } = useParams();
  const [isArchived, setIsArchived] = useState(false);
  const { data, isLoading, isError } = useGetProjectQuery(projectId);
  const { theme } = useTheme();
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error Occurred</div>;

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
  if (!workspaceId) return "loading";
  if (isLoading || !data) return <Spinner />;
  return (
    <div className="mt-[1rem]">
      <Helmet>
        {theme === "dark" ? (
          <link
            href="https://cdn.syncfusion.com/ej2/material-dark.css"
            rel="stylesheet"
          />
        ) : (
          <link
            href="https://cdn.syncfusion.com/ej2/25.2.3/material.css"
            rel="stylesheet"
          />
        )}
      </Helmet>

      <div className="flex items-center gap-[2rem] mb-[1rem] mt-[1.5rem] bg-primary/10 p-[1rem] rounded-lg group">
        <h2 className="text-nowrap text-xl font-semibold text-primary">
          {data.name}
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
            .map((item) => {
              return (
                <>
                  {item.icon && item.icon}
                  {item.element && item.element}
                </>
              );
            })}

          <IconDropdown
            menu={{ items: secondaryOptions }}
            icon={<EllipsisIconHorizontal className="relative" />}
          />
        </div>
      </div>

      <Tabs
        triggers={projectDetailTabTriggers}
        contents={[
          {
            id: "tasks",
            element: <ProjectDetailTable />,
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
                    element: (
                      <div className="pb-[1.3rem]">
                        <h1 className="text-xl font-semibold my-[1.5rem]  overflow-auto ">
                          {" "}
                          Gantt Chart
                        </h1>
                        <GanttChart />
                      </div>
                    ),
                  },
                  {
                    id: "tasks-board",
                    element: (
                      <div className="pb-[1.3rem]">
                        <h1 className="text-xl font-semibold my-[1.5rem]">
                          Tasks Board
                        </h1>
                        <TasksKanbanBoard />
                      </div>
                    ),
                  },
                  {
                    id: "milestones-board",
                    element: (
                      <div className="pb-[1.3rem]">
                        <h1 className="text-xl font-semibold my-[1.5rem]">
                          Milestones Board
                        </h1>

                        <MilestonesKanbanBoard />
                      </div>
                    ),
                  },
                  {
                    id: "timeline",
                    element: (
                      <div className="pb-[1.3rem]">
                        <h1 className="text-xl font-semibold my-[1.5rem]">
                          Timeline
                        </h1>
                        <Timeline />
                      </div>
                    ),
                  },
                  {
                    id: "files",
                    element: (
                      <div className="pb-[1.3rem]">
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
              <div className="">
                <TabWithButtonedTrigger
                  className={`mb-0 mt-[0rem]`}
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
              </div>
            ),
          },
          {
            id: "time-tracking",
            element: <div>Time Tracking Analysis</div>,
          },
        ]}
      />
    </div>
  );
};

export default ProjectDetail;
