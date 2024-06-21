import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/accordion";
import { buttonVariants } from "@/components/ui/Button/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import {
  AccountIcon,
  PreferencesIcon,
  ProfileIcon,
  SettingIcon,
  // SettingIcon,
} from "@/components/custom/common/icons/commonIcons";
import i18n from "@/intl/i18n";
import { useAppSelector } from "@/hooks";
import { selectIsSidebarExpanded } from "@/redux/features/app/appSlice";

const settings = {
  label: i18n.t("component.sidebar.menu.settings", "Settings"),
  icon: <SettingIcon />,
  items: [
    {
      label: i18n.t("component.sidebar.menu.account", "Account"),
      link: "/settings/account",
      icon: <AccountIcon />,
    },
    {
      label: i18n.t("component.sidebar.menu.profile", "Profile"),
      link: "/settings/profile",
      icon: <ProfileIcon />,
    },
    {
      label: i18n.t("component.sidebar.menu.preferences", "Preferences"),
      link: "/settings/preferences",
      icon: <PreferencesIcon />,
    },
  ],
};
const SidebarSettingsMenu = () => {
  const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);

  return (
    <div className="flex flex-col justify-center  font-semibold  mt-[2rem] w-full">
      <Accordion type="single" className="" collapsible>
        <AccordionItem
          className="flex flex-col gap-0 w-full h-full border-none "
          value={settings.label}>
          <AccordionTrigger
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "ghost",
              }),
              "justify-between",
              "flex  py-4  w-full rounded-none gap-0 no-underline hover:no-underline   ",
              "hover:text-white hover:bg-blue-600"
            )}>
            <div className="flex items-center justify-start w-full gap-1 ">
              <div className="text-xl">{settings.icon && settings.icon}</div>
              {isSidebarExpanded && settings.label}
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-primary dark:bg-background/10 py-0 ">
            <div className="flex flex-col ">
              {settings.items.map((child, index: number) => (
                <Link
                  key={index}
                  to={child.link || "/"}
                  className={cn(
                    buttonVariants({
                      size: "sm",

                      variant: "ghost",
                    }),
                    "justify-start",
                    "no-underline ",

                    "hover:no-underline",
                    "active::no-underline",
                    "flex",
                    "gap-2",
                    " rounded-none p-2",
                    "hover:text-white hover:bg-blue-600"

                    //   child.disabled && "cursor-not-allowed opacity-80"
                  )}>
                  <div className="text-xl">{child.icon && child.icon}</div>
                  {isSidebarExpanded && child.label}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SidebarSettingsMenu;
