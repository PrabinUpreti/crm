import { IDropdownMenuProps } from "@/@types";
import { DownAngularArrowIcon } from "@/components/custom/common/icons/commonIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui//Dropdown/dropdown-menu";
import { buttonVariants } from "@/components/ui/Button/button";
import { cva } from "class-variance-authority";

const dropdownVariants = cva("", {
  variants: {
    dropdownSize: {
      sm: "w-[5rem]",
      md: "w-[10rem]",
      lg: "w-[15rem]",
      default: "w-[12rem]",
    },
    dropdownVariant: {
      primary: "bg-primary text-white border-white",
      secondary: "bg-gray-100",
      default: "bg-background",
    },
  },
  defaultVariants: {
    dropdownSize: "default",
    dropdownVariant: "default",
  },
});

const Dropdown: React.FC<IDropdownMenuProps> = ({
  menu,
  dropdownSize,
  dropdownVariant,
  dropdownTriggerSize,
  dropdownTriggerVariant,
  onSelect,
  ...props
}) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger
        className={`flex items-center gap-2 justify-between ${buttonVariants({ size: dropdownTriggerSize, variant: dropdownTriggerVariant })}`}>
        {menu.label} {<DownAngularArrowIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${dropdownVariants({ dropdownSize, dropdownVariant })}  `}>
        {menu.items.map((item) => {
          return (
            <>
              <DropdownMenuItem
                textValue={item.id}
                id={item.id}
                onSelect={onSelect}
                className="cursor-pointer text-foreground  ">
                {item.label}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="last-of-type:hidden" />
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
export { dropdownVariants };
