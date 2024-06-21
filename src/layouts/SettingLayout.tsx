import { Outlet, useLocation } from "react-router";
import SettingSidebar from "@/components/custom/layout/Sidebar/SettingSidebar";
import i18n from "@/intl/i18n";
import {
  AccountIcon,
  PreferencesIcon,
  ProfileIcon,
} from "@/components/custom/common/icons/commonIcons";

export default function SettingLayout() {
  const { pathname: currentPath } = useLocation();
  return (
    <div className="relative w-full min-h-screen flex ">
      <div className={`flex flex-1 overflow-auto max-w-[calc(100vw-[240px])]`}>
        {/* <div className="pt-5 px-8 border-b-2 border-primary-100 bg-background"></div> */}
        <SettingSidebar
          items={[
            {
              label: i18n.t("component.sidebar.menu.profile", "Profile"),
              link: "/settings/profile",
              icon: <ProfileIcon />,
            },
            {
              label: i18n.t("component.sidebar.menu.account", "Account"),
              link: "/settings/account",
              icon: <AccountIcon />,
            },

            {
              label: i18n.t(
                "component.sidebar.menu.preferences",
                "Preferences"
              ),
              link: "/settings/preferences",
              icon: <PreferencesIcon />,
            },
          ]}
          path={currentPath}
        />

        <div className="w-full px-[2rem] pt-[1rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
