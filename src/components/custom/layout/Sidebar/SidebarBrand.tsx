import {
  LeftAngularArrowIcon,
  RightAngularArrowIcon,
} from "../../common/icons/commonIcons";
import {
  collapseSidebar,
  expandSidebar,
  selectIsSidebarExpanded,
} from "@/redux/features/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";
import config from "@/config";

const SidebarBrand = () => {
  const dispatch = useAppDispatch();
  const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);
  const handleCollapse = () => {
    console.log("collapsed");
    dispatch(collapseSidebar());
  };
  const handleExpand = () => {
    dispatch(expandSidebar());
  };
  return (
    <div className="logo flex items-center justify-between text-2xl gap-3 w-full ">
      {isSidebarExpanded && (
        <Link to={`/`}>
          <img
            src={config.LOGO}
            alt={config.APP_NAME}
            className=" object-contain justify-self-end ml-5 max-w-[100px]"
          />
        </Link>
      )}
      {isSidebarExpanded ? (
        <LeftAngularArrowIcon onClick={handleCollapse} className="mr-4" />
      ) : (
        <RightAngularArrowIcon
          onClick={handleExpand}
          className=" ml-auto mr-4"
        />
      )}
    </div>
  );
};

export default SidebarBrand;
