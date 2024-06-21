 
import WorkspaceDetailTable from "./Table";

import { useGetWorkspaceQuery } from "@/api/workspace";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import { useTheme } from "@/components/Providers/Theme/ThemeProvider";
import { getSuccessToast } from "@/utils/constants/toast";
import { useState } from "react";
import { useParams } from "react-router";
import {
  ArchiveIconFilled,
  ArchiveIconOutlined,
  BookmarkIconOutlined,
  CalendarIcon,
  CopyIconOutlined,
  EditIcon,
  EllipsisIconHorizontal,
  FlagIconOutlined,
  LinkIconOutlined,
  MagicIconOutlined,
  NotificationIconOutlined,
  SettingIcon,
  StarIconFilled,
  StarIconOutlined,
  UserIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import IconDropdown from "@/components/custom/common/Dropdowns/IconDropdown/IconDropdown";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip/tooltip";
import ColorPicker from "@/components/custom/common/ColorPicker/ColorPicker";

// quick access options
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
    // icon: <DropIconOutlined className="cursor-pointer text-foreground/80" />,
    isLink: false,
    element: <ColorPicker />,
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
    label: "Notification",
    id: "notification",
    icon: (
      <NotificationIconOutlined className="cursor-pointer text-foreground/80 text-lg" />
    ),
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

const WorkspaceDetail = () => {
  const { workspaceId } = useParams();
  const { data, isLoading } = useGetWorkspaceQuery(workspaceId);
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

  if (!workspaceId) return "loading";

  if (isLoading || !data) return <Spinner />;
  return (
    <div className="mb-[2rem]">
      <div className="flex items-center gap-[2rem] mb-[1rem] mt-[1.5rem] bg-primary/10 p-[1rem] rounded-lg group">
        <h2 className="text-nowrap text-xl font-semibold text-primary">
          {data.name}
        </h2>

        <div className=" flex items-center gap-[1rem] ">
          {quickAccessOptions?.primaryOptions?.find(
            (item) => item.id === "bookmark"
          ) && (
              <div className="flex gap-2  ">
                {isBookmarked ? (
                  <Tooltip>
                    <TooltipTrigger>
                      <StarIconFilled
                        onClick={toggleBookmark}
                        className="text-orange-400 text-lg cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>{`Bookmark`}</TooltipContent>
                  </Tooltip>
                ) : (
                  <Tooltip>
                    <TooltipTrigger>
                      <StarIconOutlined
                        onClick={toggleBookmark}
                        className="text-gray-500 text-lg cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>{`Bookmark`}</TooltipContent>
                  </Tooltip>
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
                  <Tooltip>
                    <TooltipTrigger>
                      <ArchiveIconFilled
                        onClick={toggleArchive}
                        className="text-primary text-lg cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>Archive</TooltipContent>
                  </Tooltip>
                ) : (
                  <Tooltip>
                    <TooltipTrigger>
                      <ArchiveIconOutlined
                        onClick={toggleArchive}
                        className="text-gray-500 text-lg cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>Archive</TooltipContent>
                  </Tooltip>
                )}

                {/* <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" /> */}
              </div>
            )}
          {/* {quickAccessOptions?.primaryOptions?.find(
            (item) => item.id === "notification"
          ) && (
            <NotificationIconOutlined className="text-2xl  text-gray-500 cursor-pointer" />
          )} */}

          {quickAccessOptions?.primaryOptions
            ?.filter(
              (item) => item.id !== "bookmark" && item.id !== "archive"
              //  && item.id !== "notification"
            )
            .map((item) => {
              return (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>{item.icon || item.element}</TooltipTrigger>
                    <TooltipContent>{item.label}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}

          <IconDropdown
            className={` `}
            menu={{ items: secondaryOptions }}
            icon={
              <Tooltip>
                <TooltipTrigger>
                  <EllipsisIconHorizontal className="relative " />
                </TooltipTrigger>
                <TooltipContent className="">{`More options`}</TooltipContent>
              </Tooltip>
            }
          />
        </div>
      </div>
      {/* <div className="flex items-end w-full ml-auto"></div> */}
      <WorkspaceDetailTable workspace={data} />
    </div>
  );
};

export default WorkspaceDetail;
