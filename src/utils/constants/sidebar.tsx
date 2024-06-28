import { IArchive, IBookmark } from "@/@types";
import { IWorkspace, IProject } from "@/api/workspace";
import {
  AnalysticIcon,
  ArchiveIconOutlined,
  BookmarkIconOutlined,
  DotIconFilled,
  OverviewIcon,
  // GoalsIcon,
  // HomeIcon,
  // PlanningIcon,
  // ProgressIcon,
  // TaskIcon,
  // SettingIcon,
  MoneyIconOutlined,
  FolderIconOutlined,
  PeopleIconOutlined,
  InventoryIconOutlined,
  ContactIconOutlined,
  LeadIconOutlined,
  FormIconOutlined,
  EmailIconOutlined,
  EmailTemplateIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import i18n from "@/intl/i18n";

const otherModules = [
  {
    id: "customer-relationship-management",
    label: "CRM",
    icon: <PeopleIconOutlined />,
    items: [
      {
        // label: "Dashboard ",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
        link: `/crm`,
        icon: <OverviewIcon />,
      },
      {
        id: "contact",
        label: "Contact ",
        link: "/crm/contact",
        icon: <ContactIconOutlined className="text-[1.1rem]" />,
      },
      {
        id: "form",
        label: "Form",
        link: "/crm/form",
        icon: <FormIconOutlined className="text-[1.1rem]" />,
      },
      {
        id: "email_template",
        label: "Email Template",
        link: "/crm/email-template",
        icon: <EmailTemplateIconOutlined className="text-[1.1rem]" />,
      },

      // {
      //   id: "opportunity",
      //   label: "Opportunity",
      //   icon: <DotIconFilled className="text-[0.6rem]" />,
      // },
      // {
      //   id: "opportunity",
      //   label: "Opportunity",
      //   icon: <DotIconFilled className="text-[0.6rem]" />,
      // },
    ],
  },
  {
    icon: <MoneyIconOutlined />,
    id: `purchase-management`,
    label: `Purchase`,
    items: [
      {
        // label: "Dashboard ",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
        link: `/project`,
        icon: <OverviewIcon />,
      },
      {
        id: `orders`,
        label: `Orders`,
        icon: <DotIconFilled className="text-[0.6rem]" />,
      },
      {
        id: `invoices`,
        label: `Invoices`,
        icon: <DotIconFilled className="text-[0.6rem]" />,
      },
      {
        id: `suppliers`,
        label: `Suppliers`,
        icon: <DotIconFilled className="text-[0.6rem]" />,
      },
    ],
  },
  {
    id: "inventory-management",
    label: "Inventory",
    icon: <InventoryIconOutlined />,
    items: [
      {
        // label: "Dashboard ",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
        link: `/inventory`,
        icon: <OverviewIcon />,
      },
      {
        id: "products",
        label: "Products",
        icon: <DotIconFilled className="text-[0.6rem]" />,
      },
      {
        id: "stock",
        label: "Stocks",
        icon: <DotIconFilled className="text-[0.6rem]" />,
      },
      {
        id: "warehouses",
        label: "Warehouses",
        icon: <DotIconFilled className="text-[0.6rem]" />,
      },
      {
        id: "returns",
        label: "Returns",
        icon: <DotIconFilled className="text-[0.6rem]" />,
      },
    ],
  },
];
interface ISidebarItemsProps {
  workspaces: IWorkspace[];
  bookmarks: IBookmark[];
  archives: IArchive[];
}
export const sidebarItems = (injectables: ISidebarItemsProps) => [
  {
    // label: "Dashboard ",
    label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
    link: `/project`,
    icon: <OverviewIcon />,
  },
  {
    icon: <FolderIconOutlined />,
    id: `project-management`,
    label: `Project`,
    link: `/project`,
    items: [
      {
        // label: "Dashboard ",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
        link: `/`,
        icon: <OverviewIcon />,
      },
      (() => {
        const workspaces = injectables.workspaces;
        const items = workspaces?.slice(0, 3).map((workspace: IWorkspace) => {
          const link = `/project/workspace/${workspace?.id}`;
          const icon = <DotIconFilled className="text-[0.6rem]" />;
          const items = workspace?.projects?.map((project: IProject) => {
            const link = `/project/workspace/${workspace?.id}/project/${project?.id}`;
            return {
              link,
              label: project.name,
              icon: <DotIconFilled className="text-[0.6rem]" />,
            };
          });
          return { link, label: workspace.name, items, icon };
        });

        return {
          label: i18n.t("component.sidebar.menu.workspaces", "Workspaces"),
          link: `/project/workspaces`,
          icon: <AnalysticIcon />,
          items: items && [
            ...items,
            {
              // icon: <DotIconFilled className="text-[0.6rem]" />,
              label: (
                <>
                  <span>View all</span>
                  {/* <Ellipsis /> */}
                </>
              ),
              link: `/project/workspaces`,
            },
          ],
        };
      })(),

      (() => {
        const bookmarks = injectables?.bookmarks;
        const items = bookmarks?.slice(0, 3)?.map((project: IBookmark) => {
          const link = `/project/bookmark/${project.id}`;
          return {
            link,
            label: project.name,
            icon: <DotIconFilled className="text-[0.6rem]" />,
          };
        });

        return {
          label: i18n.t("component.sidebar.menu.bookmarks", "Bookmarks"),
          link: `/project/bookmarks`,
          icon: <BookmarkIconOutlined />,
          items: items && [
            ...items,
            {
              // icon: <DotIconFilled className="text-[0.6rem]" />,
              label: (
                <>
                  <span>View All</span>
                  {/* <Ellipsis /> */}
                </>
              ),
              link: `/project/bookmarks`,
            },
          ],
        };
      })(),
      (() => {
        const archives = injectables?.archives;
        const items = archives?.slice(0, 3)?.map((project: IArchive) => {
          const link = `/project/archive/${project.id}`;
          return {
            link,
            label: project.name,
            icon: <DotIconFilled className="text-[0.6rem]" />,
          };
        });

        return {
          label: i18n.t("component.sidebar.menu.archives", "Archives"),
          link: `/project/archives`,
          icon: <ArchiveIconOutlined />,
          items: items && [
            ...items,
            {
              // icon: <DotIconFilled className="text-[0.6rem]" />,
              label: (
                <>
                  <span>View All</span>
                  {/* <Ellipsis /> */}
                </>
              ),
              link: `/project/archives`,
            },
          ],
        };
      })(),
    ],
  },
  ...otherModules,
];
