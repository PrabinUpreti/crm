import { ITabContent, ITabTrigger, TTabsProps } from "@/@types";
import { Button } from "@/components/ui/Button/button";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs as ShadTabs,
} from "@/components/ui/Tabs/tabs";
import { cn } from "@/lib/utils";

const Tabs = ({ triggers, contents, className, ...props }: TTabsProps) => {
  return (
    <ShadTabs
      defaultValue={triggers[0].id}
      {...props}
      className={`${(cn(className), "!mt-[0rem]")}`}
    >
      <TabsList className="w-full px-0 pb-0 flex border-b-[3px] border-b-gray-100 shadow-none items-center justify-between    py-[1rem] bg-white  gap-[1rem] dark:bg-background rounded-none dark:border-gray-700   ">
        {triggers.map((trigger: ITabTrigger) => {
          return (
            <TabsTrigger
              key={trigger.id}
              className=" hover:bg-inherit   hover:border-b-[3px] hover:border-b-primary dark:hover:border-foreground data-[state=active]:border-b-[3px] rounded-none data-[state=active]:border-b-primary dark:data-[state=active]:border-b-foreground  w-full"
              asChild
              value={trigger.id}
              id={trigger.id}
            >
              <Button variant={"ghost"} className="bg-inherit">
                {trigger.label}
              </Button>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {contents.map((content: ITabContent) => {
        return (
          <TabsContent
            className=""
            value={content.id}
            id={content.id}
            key={content.id}
          >
            {content.element}
          </TabsContent>
        );
      })}
    </ShadTabs>
  );
};

export default Tabs;
