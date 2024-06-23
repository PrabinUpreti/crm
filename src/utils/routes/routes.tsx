import LoginPage from "@/pages/Auth/LoginPage";
import { pageTitles } from "../constants/pageTitles";
import RegisterPage from "@/components/page/Register/Register";
import { PrivateRoute } from "@/layouts/PrivateRoute";
import { ROLE } from "../constants";
import CommonLayout from "@/layouts/CommonLayout";
import AnalyticsPage from "@/pages/Dashboard/AnalyticsPage";
import WorkspacesPage from "@/pages/Workspace/WorkspacesPage";
import BookmarksPage from "@/pages/Bookmark/BookmarksPage";
import ArchivesPage from "@/pages/Archive/ArchivesPage";
import WorkspaceDetailPage from "@/pages/Workspace/WorkspaceDetailPage";
import ProjectDetailPage from "@/pages/Project/ProjectDetailPage";
import CreateProjectPage from "@/pages/Project/CreateProjectPage";
import UpdateProjectPage from "@/pages/Project/UpdateProjectPage";
import CreateTaskPage from "@/pages/Task/CreateTaskPage";
import UpdateTaskPage from "@/pages/Task/UpdateTaskPage";
import BookmarkDetailPage from "@/pages/Bookmark/BookmarkDetail";
import ArchiveDetailPage from "@/pages/Archive/ArchiveDetail";
import CreateBudgetPage from "@/pages/Budget/CreateBudgetPage";
import SettingLayout from "@/layouts/SettingLayout";
import AccountSettingPage from "@/pages/Setting/AccountSettingPage";
import ProfileSettingPage from "@/pages/Setting/ProfileSettingPage";
import PreferencesSettingPage from "@/pages/Setting/PreferencesSettingPage";
import TaskDetailPage from "@/pages/Task/TaskDetailPage";
import ContactPage from "@/pages/Contact/Contact";

// setting routes
export const settingRoutes = [
  {
    path: `/settings`,
    element: ProfileSettingPage,
    pageTitle: pageTitles.settingProfilePage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Profile` },
        path: `/settings/profile`,
      },
    ],
  },
  {
    path: `/settings/account`,
    element: AccountSettingPage,
    pageTitle: pageTitles.settingAccountPage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Account` },
        path: `/settings/account`,
      },
    ],
  },
  {
    path: `/settings/profile`,
    element: ProfileSettingPage,
    pageTitle: pageTitles.settingProfilePage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Profile` },
        path: `/settings/profile`,
      },
    ],
  },
  {
    path: `/settings/preferences`,
    element: PreferencesSettingPage,
    pageTitle: pageTitles.settingPreferencesPage,
    crumbs: () => [
      {
        label: { key: ``, fallback: `Preferences` },
        path: `/settings/preferences`,
      },
    ],
  },
];

export const crmModuleRoutes = [
  {
    path: `/crm`,
    element: AnalyticsPage,
    pageTitle: pageTitles.crmAnalyticsPage,
  },

  // bookmark related routes
  {
    path: `/crm/contact`,
    element: ContactPage,
    pageTitle: pageTitles.crmContactPage,
    crumbs: () => [
      { label: { key: ``, fallback: `Contact` }, path: `contact` },
    ],
  },
  {
    path: `/crm/contact/:contactId`,
    element: BookmarkDetailPage,
    pageTitle: pageTitles.crmContactPage,
    crumbs: ({ contactId }: { contactId: string }) => [
      {
        label: { key: ``, fallback: `Contact` },
        path: `/contact/${contactId}`,
      },
    ],
  },

  // archive related routes
  {
    path: `/crm/lead`,
    element: ArchivesPage,
    pageTitle: pageTitles.crmLeadPage,
    crumbs: () => [{ label: { key: ``, fallback: `Lead` }, path: `/lead` }],
  },
  {
    path: `/crm/lead/:leadId`,
    element: ArchiveDetailPage,
    pageTitle: pageTitles.crmLeadPage,
    crumbs: ({ leadId }: { leadId: string }) => [
      {
        label: { key: ``, fallback: `Lead` },
        path: `/lead/${leadId}`,
      },
    ],
  },

  // workspace related routes
  // {
  //   path: `/project/workspaces`,
  //   element: WorkspacesPage,
  //   pageTitle: pageTitles.workspacesPage,
  //   crumbs: () => [
  //     { label: { key: ``, fallback: `Workspaces` }, path: `/workspaces` },
  //   ],
  // },
  // {
  //   path: `/project/workspace/:workspaceId`,
  //   element: WorkspaceDetailPage,
  //   pageTitle: pageTitles.workspaceDetailPage,
  //   crumbs: ({ workspaceId }: { workspaceId: string }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/workspace/${workspaceId}`,
  //     },
  //   ],
  // },

  // // project related routes
  // {
  //   path: `/project/workspace/:workspaceId/project/:projectId`,
  //   element: ProjectDetailPage,
  //   pageTitle: pageTitles.projectDetailPage,
  //   crumbs: ({
  //     workspaceId,
  //     projectId,
  //   }: {
  //     workspaceId: string;
  //     projectId: string;
  //   }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/project/workspace/${workspaceId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Project` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}`,
  //     },
  //   ],
  // },
  // {
  //   path: `/project/workspace/:workspaceId/project/create`,
  //   element: CreateProjectPage,
  //   pageTitle: pageTitles.createProjectPage,
  //   crumbs: ({ workspaceId }: { workspaceId: string }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/project/workspace/${workspaceId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Create Project` },
  //       path: `/project/workspace/${workspaceId}/project/create`,
  //     },
  //   ],
  // },
  // {
  //   path: `/project/workspace/:workspaceId/project/:projectId/update`,
  //   element: UpdateProjectPage,
  //   pageTitle: pageTitles.updateProjectPage,
  //   crumbs: ({
  //     workspaceId,
  //     projectId,
  //   }: {
  //     workspaceId: string;
  //     projectId: string;
  //   }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/project/workspace/${workspaceId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: ` Project` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: ` Update` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}/update`,
  //     },
  //   ],
  // },

  // // task related routes
  // {
  //   path: `/project/workspace/:workspaceId/project/:projectId/task/:taskId`,
  //   element: TaskDetailPage,
  //   pageTitle: pageTitles.taskDetailPage,
  //   crumbs: ({
  //     workspaceId,
  //     projectId,
  //     taskId,
  //   }: {
  //     workspaceId: string;
  //     projectId: string;
  //     taskId: string;
  //   }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/project/workspace/${workspaceId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Project` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Task` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}/task/${taskId}`,
  //     },
  //   ],
  // },
  // {
  //   path: `/project/workspace/:workspaceId/project/:projectId/task/create`,
  //   element: CreateTaskPage,
  //   pageTitle: pageTitles.createTaskPage,
  //   crumbs: ({
  //     workspaceId,
  //     projectId,
  //   }: {
  //     workspaceId: string;
  //     projectId: string;
  //   }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/project/workspace/${workspaceId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Project` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Create Task` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}/task/create`,
  //     },
  //   ],
  // },
  // {
  //   path: `/project/workspace/:workspaceId/project/:projectId/task/:taskId/update`,
  //   element: UpdateTaskPage,
  //   pageTitle: pageTitles.updateTaskPage,
  //   crumbs: ({
  //     workspaceId,
  //     projectId,
  //     taskId,
  //   }: {
  //     workspaceId: string;
  //     projectId: string;
  //     taskId: string;
  //   }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/project/workspace/${workspaceId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Project` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Task` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}/task/${taskId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Update` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}/task/${taskId}/update`,
  //     },
  //   ],
  // },

  // // budget related routes
  // {
  //   path: `/project/workspace/:workspaceId/project/:projectId/budget/create`,
  //   element: CreateBudgetPage,
  //   pageTitle: pageTitles.createBudgetPage,
  //   crumbs: ({
  //     workspaceId,
  //     projectId,
  //   }: {
  //     workspaceId: string;
  //     projectId: string;
  //   }) => [
  //     {
  //       label: { key: ``, fallback: `Workspace` },
  //       path: `/project/workspace/${workspaceId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Project` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}`,
  //     },
  //     {
  //       label: { key: ``, fallback: `Create Budget` },
  //       path: `/project/workspace/${workspaceId}/project/${projectId}/budget/create`,
  //     },
  //   ],
  // },
];

// private routes
export const privateRoutes = [
  {
    path: `/`,
    element: AnalyticsPage,
    pageTitle: pageTitles.analyticsPage,
  },
  // project management modules related routes
  {
    path: `/crm`,
    roles: [ROLE.ADMIN],
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.crm`,
          fallback: `CRM`,
        },
        path: `/crm`,
      },
    ],
    children: crmModuleRoutes,
  },
  // settings module related routes
  {
    path: `/settings`,
    component: SettingLayout,
    element: SettingLayout,
    roles: [ROLE.ADMIN],
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.setting`,
          fallback: `Settings`,
        },
        path: `/settings`,
      },
    ],
    children: settingRoutes,
  },
];

// all routes
export const routes = [
  // public routes
  {
    path: `/login`,
    element: LoginPage,
    pageTitle: pageTitles.loginPage,
  },
  {
    path: `/signup`,
    element: RegisterPage,
    pageTitle: pageTitles.signupPage,
  },

  // private routes
  {
    path: ``,
    element: PrivateRoute,
    component: CommonLayout,
    crumbs: () => [
      {
        label: {
          key: `component.sidebar.menu.dashboard`,
          fallback: `Dashboard`,
        },
        path: `/`,
      },
    ],
    children: privateRoutes,
  },
];
