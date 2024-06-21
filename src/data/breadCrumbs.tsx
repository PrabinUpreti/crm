import i18n from "@/intl/i18n";

const breadcrumbsList = [
  {
    path: "/",
    breadcrumb: [
      {
        path: "/",
        label: "",
      },
    ],
  },
  {
    path: "/workspaces/detail/:workspaceId",
    breadcrumb: [
      {
        path: "/",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
      },
      {
        path: "/workspaces",
        label: "Workspaces",
      },

      {
        path: "/workspace1",
        label: "Workspace 1",
      },
    ],
  },
  {
    path: "/workspaces/detail",
    breadcrumb: [
      {
        path: "/",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
      },
      {
        path: "/workspaces",
        label: "Workspaces",
      },

    ],
  },
  {
    path: "/workspaces",
    breadcrumb: [
      {
        path: "/",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
      },
      {
        path: "/workspaces",
        label: "Workspaces",
      },
    ],
  },
  {
    path: "/project/:projectId",
    breadcrumb: [
      {
        path: "/",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
      },
      {
        path: "/project",
        label: "Projects",
      },
      {
        path: "/project1",
        label: "Project 1",
      },
    ],
  },
  {
    path: "/project/updateProject",
    breadcrumb: [
      {
        path: "/",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
      },
      {
        path: "/project",
        label: "Projects",
      },
      {
        path: "/updateProject",
        label: "Update Project",
      },
    ],
  },
  {
    path: "/project/createProject",
    breadcrumb: [
      {
        path: "/",
        label:i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
      },
      {
        path: "/project",
        label: "Projects",
      },
      {
        path: "/createProject",
        label: "Create Project",
      },
    ],
  },
  {
    path: "/bookmarked",
    breadcrumb: [
      {
        path: "/",
        label:i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
      },
      {
        path: "/bookmarked",
        label: "Bookmarked",
      },
    ],
  },
];

export default breadcrumbsList;
