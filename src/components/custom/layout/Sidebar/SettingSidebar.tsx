import { SidebarItemProps, SidebarProps } from "@/@types";
import * as React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/Button/button";
import { cn } from "@/lib/utils";

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside
      className={`w-[240px] overflow-auto dark:bg-background text-foreground dark:text-foreground dark:border-r h-4/6  py-4 hidden md:flex md:flex-col gap-7     cursor-pointer min-h-screen transition-all sticky top-0 `}
    >
      <div className="h-full flex flex-col justify-between min-h-[calc(100vh-6.50rem)] ">
        <nav className="flex flex-col  w-full ">
          {items?.map(
            (item: SidebarItemProps, index: number) =>
              item.link && (
                <Link
                  key={index}
                  to={item.link}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "justify-start",
                    "no-underline ",
                    "hover:no-underline",
                    "flex",
                    "gap-1",
                    "rounded-none",
                    "py-6",
                    "",
                    "hover:text-primary",
                    "rounded-lg"
                  )}
                >
                  <div className="text-xl">{item.icon && item.icon}</div>
                  {item.label}
                </Link>
              )
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
