import {
  FilterIcon,
  PlusIcon,
  ThreeVerticalDots,
} from "@/components/custom/common/icons/commonIcons";
import { Button } from "@/components/plate-ui/button";
import { IIconDropdownMenuProps, IModalProps } from "@/@types";
import { Link } from "react-router-dom";
import IconDropdown from "../../Dropdowns/IconDropdown/IconDropdown";
import Modal from "../../Modal/Modal";
import { ProjectsTableSearch } from "@/utils/constants";
import { Toggle } from "@/components/ui/Toggle/toggle";

export interface ITableToolbar {
  handleSearch?: (e: React.FormEvent) => void;
  dropdownMenus: IIconDropdownMenuProps["menu"];
  heading: string;
  createButtonText?: string;
  createPagePath?: string;
  hasBookmark?: boolean;
  hasArchive?: boolean;
  hasFilters?: boolean;
  filters?: React.ReactNode;
  type?: "page" | "modal";
  hasNotification?: boolean;
  hasSearch?: boolean;
  search?: React.ReactNode;
  modal?: IModalProps;
  isSideBarVisible: () => boolean;
  setSideBarVisible: (value: boolean) => void;
}
const TableToolbar: React.FC<ITableToolbar> = ({
  // handleSearch,
  hasSearch = true,
  dropdownMenus,
  heading,
  // createButtonText,
  createPagePath,
  hasFilters = true,
  type = "page",
  modal,
  search = ProjectsTableSearch,
  isSideBarVisible,
  setSideBarVisible,
}) => {
  return (
    <div>
      <div className="flex items-end w-full justify-between ">
        <h2 className="text-nowrap text-xl font-semibold text-foreground">
          {heading}
        </h2>
        <div className="w-full flex flex-col gap-[1rem]  items-end">
          <div className="flex items-center  gap-[1rem]">
            {hasSearch && <>{search}</>}
            {hasFilters && (
              <Toggle
                asChild
                aria-label="Toggle bold"
                className="rounded-full h-[2.5rem] w-[2.5rem] p-0"
              >
                <Button
                  onClick={() => setSideBarVisible(!isSideBarVisible())}
                  variant={"outline"}
                  size={"icon"}
                  className={`rounded-full ${isSideBarVisible() ? "rotate-90" : ""} transition-all`}
                >
                  {<FilterIcon />}
                </Button>
              </Toggle>
            )}
            {type == "modal" && <Modal {...modal} />}
            {type === "page" && (
              <Button
                size={"icon"}
                className="flex gap-2 rounded-full h-[2.4rem] w-[2.4rem]"
                asChild
              >
                <Link to={`${createPagePath}`}>
                  <PlusIcon className="" />
                  {/* <span>{createButtonText && createButtonText}</span> */}
                </Link>
              </Button>
            )}
            <IconDropdown
              menu={dropdownMenus}
              dropdownSize="sm"
              dropdownVariant="default"
              icon={<ThreeVerticalDots />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableToolbar;
