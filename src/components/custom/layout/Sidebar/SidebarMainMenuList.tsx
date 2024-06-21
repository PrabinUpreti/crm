import { SidebarItemProps } from "@/@types";

import SidebarCollapsibleMenu from "./SidebarCollapsibleMenu";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMainMenuList = ({
  items,
  padding,
}: {
  items: SidebarItemProps[];
  padding: number;
}) => {
  return (
    <nav className="flex flex-col gap-0 w-full ">
      {items?.map((item: SidebarItemProps) =>
        item.items ? (
          <SidebarCollapsibleMenu
            item={item}
            key={item.link}
            level={1}
            padding={padding}
          />
        ) : (
          item.link && (
            <SidebarMenuItem
              child={item}
              key={item.link}
              level={1}
              padding={padding}
            />
          )
        ),
      )}
    </nav>
  );
};

export default SidebarMainMenuList;
