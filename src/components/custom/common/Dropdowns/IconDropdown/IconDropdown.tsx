import { IIconDropdownMenuProps } from "@/@types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui//Dropdown/dropdown-menu";
import { cva } from "class-variance-authority";

const iconDropdownVariants = cva("text-foreground", {
  variants: {
    dropdownSize: {
      sm: "w-[5rem]",
      md: "w-[10rem]",
      lg: "w-[15rem]",
      default: "w-[12rem]",
    },
    dropdownVariant: {
      primary: "bg-primary text-white border-white border-b-1",
      secondary: "bg-gray-100",
      default: "bg-background",
    },
  },
  defaultVariants: {
    dropdownSize: "default",
    dropdownVariant: "default",
  },
});

const IconDropdown: React.FC<IIconDropdownMenuProps> = ({
  menu,
  dropdownSize,
  dropdownVariant,
  icon,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{icon}</DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${iconDropdownVariants({ dropdownSize, dropdownVariant })} `}
      >
        {menu.items.map((item) => {
          return (
            <>
              <DropdownMenuItem className="cursor-pointer flex gap-3 items-center text-foreground">
                {item?.icon}
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

export default IconDropdown;
export { iconDropdownVariants };
