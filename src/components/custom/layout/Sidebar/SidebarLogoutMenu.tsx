import { useAppSelector } from "@/hooks";
import { LogoutIcon } from "../../common/icons/commonIcons";
import { selectIsSidebarExpanded } from "@/redux/features/app/appSlice";
import i18n from "@/intl/i18n";
import { usePrefetch } from "@/api/user";

const SidebarLogoutMenu = () => {
  const logoutUser = usePrefetch("logoutUser");

  const handleLogout = async () => {
    try {
      const res = logoutUser();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);

  return (
    <div
      onClick={handleLogout}
      className="flex items-center p-3 py-2.5 gap-1 hover:text-white hover:bg-blue-600 dark:hover:bg-primary/15  text-sm   "
    >
      <LogoutIcon className="text-xl" />
      {isSidebarExpanded && i18n.t("component.sidebar.menu.logout", "Log out")}
    </div>
  );
};

export default SidebarLogoutMenu;
