import Header from "./Header/Header.tsx";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import { sidebarItems } from "@/utils/constants/sidebar.tsx";
import Sidebar from "@/components/custom/layout/Sidebar/Sidebar.tsx";
import Breadcrumb from "@/components/custom/common/Breadcrumb/Breadcrumb.tsx";
import { useGetWorkspacesQuery } from "@/api/workspace";
import { useGetBookmarksQuery } from "@/api/bookmark.ts";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner.tsx";
import { useGetArchivesQuery } from "@/api/archives.ts";
import { selectIsSidebarExpanded } from "@/redux/features/app/appSlice.ts";
import { useAppSelector } from "@/hooks/index.ts";

const CommonLayout = () => {
  const { pathname: currentPath } = useLocation();
  const { data: workspaces, isLoading } = useGetWorkspacesQuery("");
  const { data: bookmarks } = useGetBookmarksQuery("");
  const { data: archives } = useGetArchivesQuery("");

  const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);

  if (isLoading || !workspaces || !bookmarks || !archives)
    return (
      <div className="min-h-[100vh] flex items-center justify-center ">
        <Spinner size={"large"} />
      </div>
    );
  return (
    <div className="relative w-full min-h-screen flex ">
      <Sidebar
        items={sidebarItems({ workspaces, bookmarks, archives })}
        path={currentPath}
      />

      <div
        className={`flex flex-col flex-1 overflow-auto ${isSidebarExpanded ? `max-w-[calc(100vw-[240px])]` : `max-w-[calc(100vw-70px)]`}`}
      >
        <div className="z-[50] sticky top-0 flex h-[70px] w-full justify-between  items-center px-8 border-b-2 border-primary-100 bg-background">
          <Header />
        </div>

        <div className="w-full px-[2rem] pt-[1rem]">
          <div>
            <Breadcrumb />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default CommonLayout;
