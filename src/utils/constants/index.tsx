/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  // CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  // FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

// export const BASE_URL = `http://192.168.254.239:4000`;
export const BASE_URL = `http://localhost:4000`;
export const REAL_API_BASE_URL = "http://pragyo.localhost.com:8001/api/v1";
export const PMS_API_BASE_URL = `http://lokesh.localhost.com:8000/api`;

export const avatarDropdownMenu = {
  label: "",
  items: [
    {
      id: 2,
      label: "Profile",
      isLink: true,
      link: "/settings/profile",
    },
    {
      id: 1,
      label: "Account",
      isLink: true,
      link: "/settings/account",
    },
    {
      id: 3,
      label: "Preferences",
      isLink: true,
      link: "/settings/preferences",
    },
    {
      id: 4,
      label: "Logout",
      isLink: false,
      link: "/login",
    },
  ],
};

export const dropdownMenus = {
  label: "Profile",
  items: [
    {
      id: 1,
      label: "My Account",
      isLink: true,
      link: "/account",
    },
    {
      id: 2,
      label: "Profile",
      isLink: true,
      link: "/profile",
    },
    {
      id: 3,
      label: "Billing",
      isLink: true,
      link: "/billing",
    },
    {
      id: 4,
      label: "Team",
      isLink: true,
      link: "/team",
    },
    {
      id: 5,
      label: "Subscription",
      isLink: true,
      link: "/subscription",
    },
  ],
};
//
export const userInfo = {
  name: "User",
  username: "user",
  email: "user@gmail.com",
  role: "manager",
};

export const ROLE = {
  ADMIN: "admin",
  MANAGER: "manager",
  USER: "user",
};

import { CalendarIcon } from "@radix-ui/react-icons";
import { IComboboxProps, ICommandProps } from "@/@types";
import Combobox from "@/components/custom/common/Combobox/Combobox";
import SpeedDial from "@/components/custom/common/SpeedDial/SpeedDial";
import SearchInput from "@/components/custom/common/SearchInput/SearchInput";
import {
  ArchiveIconOutlined,
  BookmarkIconOutlined,
  DotIconFilled,
  EmailIconReadOutlined,
  NotificationIconOutlined,
  ProjectsIcon,
  SettingIcon,
  TaskIcon,
  UserIconCircleOutlined,
  WorkspaceIcon,
} from "@/components/custom/common/icons/commonIcons";

export const comboboxData: IComboboxProps = {
  defaultText: "Search items here...",
  emptyText: "No results found",
  placeholder: "Search here...",
  comboboxGroups: [
    {
      heading: "Suggestions",
      comboboxItems: [
        {
          icon: <CalendarIcon className="mr-2 h-4 w-4" />,
          label: "Calendar",
          value: "calendar",
        },
        {
          icon: <FaceIcon className="mr-2 h-4 w-4" />,
          label: "Search Emoji",
          value: "search-emoji",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Launch",
          value: "launch",
        },
      ],
    },
    {
      heading: "Settings",
      comboboxItems: [
        {
          icon: <PersonIcon className="mr-2 h-4 w-4" />,
          label: "Profile",
          value: "profile",
        },
        {
          icon: <EnvelopeClosedIcon className="mr-2 h-4 w-4" />,
          label: "Mail",
          value: "mail",
        },
        {
          icon: <GearIcon className="mr-2 h-4 w-4" />,
          label: "Settings",
          value: "settings",
        },
      ],
    },
  ],
};

export const priorityFilterComboboxData: IComboboxProps = {
  defaultText: "Filter by priorities",
  emptyText: "No results found",
  placeholder: "Search priorities ..",
  comboboxGroups: [
    {
      heading: "Priorities",
      comboboxItems: [
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "High",
          value: "high",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Medium",
          value: "medium",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Low",
          value: "low",
        },
      ],
    },
  ],
};
export const statusFilterComboboxData: IComboboxProps = {
  defaultText: "Filter by  statuses",
  emptyText: "No results found",
  placeholder: "Search statuses ..",
  comboboxGroups: [
    {
      heading: "Statuses",
      comboboxItems: [
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Pending",
          value: "pending",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Not Started",
          value: "not-started",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "On Progress",
          value: "on-progress",
        },
        {
          icon: <DotIconFilled className="mr-2 h-4 w-4" />,
          label: "Completed",
          value: "completed",
        },
      ],
    },
  ],
};
export const projectsTableFilterItems = [
  <Combobox comboboxData={priorityFilterComboboxData} />,
  <Combobox comboboxData={statusFilterComboboxData} />,
];

export const ProjectsTableFilters = () => {
  return (
    <SpeedDial
      children={projectsTableFilterItems}
      direction="left"
      itemWidth={180}
    />
  );
};

export const ProjectsTableSearch = ({
  handleSearch,
}: {
  handleSearch: any;
}): React.ReactNode => {
  return (
    <SpeedDial
      children={[
        <SearchInput
          onSubmit={handleSearch}
          id="workspace-search"
          name="workspace-search"
          inputSize="md"
          placeholder="Search here..."
          className=""
        />,
      ]}
      direction="left"
      itemWidth={250}
    />
  );
};

export const commandData: ICommandProps = {
  shortcut: "⌘j",
  placeholder: "Press ⌘j to open command palette",
  emptyText: "No results found",
  commandGroups: [
    {
      heading: "Navigation",
      commandItems: [
        {
          icon: <SettingIcon className="mr-2 h-4 w-4" />,
          text: "Go to settings",
          link: `/settings`,
          hasLink: true,
        },
        {
          icon: <ArchiveIconOutlined className="mr-2 h-4 w-4" />,
          text: "Go to archives",
          link: `/archives`,
          hasLink: true,
        },
        {
          icon: <UserIconCircleOutlined className="mr-2 h-4 w-4" />,
          text: "Go to Edit Profile ",
          link: `/account/profile/edit`,
          hasLink: true,
        },

        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          text: "Go to Bookmarks ",
          link: `/bookmarks`,
          hasLink: true,
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          text: "Go to Notifications ",
          link: `/account/notifications`,
          hasLink: true,
        },
        {
          icon: <UserIconCircleOutlined className="mr-2 h-4 w-4" />,
          text: "Go to Profile Detail",
          link: `/account/profile`,
          hasLink: true,
        },
        {
          icon: <ProjectsIcon className="mr-2 h-4 w-4" />,
          text: "Go to Create Project ",
          link: `/project/create`,
          hasLink: true,
        },

        {
          icon: <ProjectsIcon className="mr-2 h-4 w-4" />,
          text: "Go to Update Project",
          link: `/project/update`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Create Task ",
          link: `/task/create`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Update  task",
          link: `/task/update`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Create Sub Task  ",
          link: `/sub-task/create`,
          hasLink: true,
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Go to Update Sub Task ",
          link: `/task/update`,
          hasLink: true,
        },
      ],
    },

    {
      heading: " My Account",
      commandItems: [
        {
          icon: <PersonIcon className="mr-2 h-4 w-4" />,
          text: "Profile",
          shortcut: "⌘P",
        },
        {
          icon: <EnvelopeClosedIcon className="mr-2 h-4 w-4" />,
          text: "Mail",
          shortcut: "⌘B",
        },
        {
          icon: <GearIcon className="mr-2 h-4 w-4" />,
          text: "Settings",
          shortcut: "⌘S",
        },
      ],
    },
    {
      heading: "Search",
      commandItems: [
        {
          icon: <WorkspaceIcon className="mr-2 h-4 w-4" />,
          text: "Search Workspace by name",
        },
        {
          icon: <ProjectsIcon className="mr-2 h-4 w-4" />,
          text: "Search Project by name",
        },

        {
          icon: <ArchiveIconOutlined className="mr-2 h-4 w-4" />,
          text: "Search Archive by name ",
        },

        {
          icon: <BookmarkIconOutlined className="mr-2 h-4 w-4" />,
          text: "Search Bookmark by name ",
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Search Task by name",
        },
        {
          icon: <TaskIcon className="mr-2 h-4 w-4" />,
          text: "Search sub Task by name",
        },
        {
          icon: <WorkspaceIcon className="mr-2 h-4 w-4" />,
          text: "Search Project templates by name",
        },
      ],
    },
    {
      heading: "General",
      commandItems: [
        {
          icon: <WorkspaceIcon className="mr-2 h-4 w-4" />,
          text: "Create Workspace",
        },
        {
          icon: <NotificationIconOutlined className="mr-2 h-4 w-4" />,
          text: "Clear all Notifications",
        },
        {
          icon: <EmailIconReadOutlined className="mr-2 h-4 w-4" />,
          text: "Mark all Notifications as read",
        },
      ],
    },
  ],
};
