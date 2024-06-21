import { SidebarItemProps } from "@/@types";
import { selectIsSidebarExpanded } from "@/redux/features/app/appSlice";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/accordion";
import { buttonVariants } from "@/components/ui/Button/button";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/hooks";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarCollapsibleMenu = ({
  item,
  level,
  padding,
}: {
  item: SidebarItemProps;
  level: number;
  padding: number;
}) => {
  const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);
  // level = level + 1;

  if (!item.items) {
    console.log(level, "level");
    return (
      <SidebarMenuItem
        key={item.link}
        child={item}
        level={level}
        padding={padding}
      />
    );
  }
  return (
    <Accordion type="single" className="" collapsible>
      <AccordionItem
        className="flex flex-col gap-0 w-full h-full border-none"
        value={item.label}
      >
        <AccordionTrigger
          className={cn(
            buttonVariants({
              size: "sm",
              variant: "ghost",
            }),
            "justify-between",
            " flex py-4  w-full rounded-none gap-0 no-underline hover:no-underline   ",
            "hover:text-white hover:bg-blue-600",
          )}
          style={{
            paddingLeft: `${level * padding}px`,
          }}
        >
          <div className="flex items-center justify-start w-full gap-2 ">
            <div className="text-xl">{item.icon && item.icon}</div>
            {isSidebarExpanded && item.label}
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-primary dark:bg-background/10 py-0 ">
          <div className="flex flex-col ">
            {item?.items?.map((child: SidebarItemProps) => {
              if (child.items) {
                return (
                  <SidebarCollapsibleMenu
                    item={child}
                    key={child.link}
                    level={level + 1}
                    padding={padding}
                  />
                );
              } else {
                return (
                  <SidebarMenuItem
                    level={level + 1}
                    key={child.link}
                    child={child}
                    parent={item}
                    padding={padding}
                  />
                );
              }
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarCollapsibleMenu;
