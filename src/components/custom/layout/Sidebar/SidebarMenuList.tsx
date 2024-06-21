import { SidebarItemProps } from "@/@types";
import SidebarSettingsMenu from "./SidebarSettingsMenu";
import SidebarLogoutMenu from "./SidebarLogoutMenu";
import SidebarMainMenuList from "./SidebarMainMenuList";
import { useMemo } from "react";

const SidebarMenuList = ({ items }: { items: SidebarItemProps[] }) => {
  const padding = useMemo(() => 6, []);

  return (
    <div className="h-full flex flex-col justify-between min-h-[calc(100vh-6.50rem)] ">
      <SidebarMainMenuList items={items} padding={padding} />
      <div>
        <SidebarSettingsMenu />
        <SidebarLogoutMenu />
      </div>
    </div>
  );
};

export default SidebarMenuList;
