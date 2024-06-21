import { ICheckboxDropdownMenuProps } from "@/@types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui//Dropdown/dropdown-menu";
import { buttonVariants } from "@/components/ui/Button/button";
import { cva } from "class-variance-authority";

const checkboxDropdownVariants = cva("", {
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
      default: "bg-gray-100",
    },
  },
  defaultVariants: {
    dropdownSize: "default",
    dropdownVariant: "default",
  },
});

const CheckboxDropdown: React.FC<ICheckboxDropdownMenuProps> = ({
  menu,
  dropdownSize,
  dropdownVariant,
  dropdownTriggerSize,
  dropdownTriggerVariant,
  onSelect,
  icon,
  ...props
}) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger
        asChild
        // className={`flex items-center gap-2 justify-between ${dropdownTriggerVariants({ dropdownTriggerSize, dropdownTriggerVariant })}`}
        className={`flex items-center gap-2  ${buttonVariants({ size: dropdownTriggerSize, variant: dropdownTriggerVariant })}`}
      >
        <DropdownMenuLabel>{menu.label}</DropdownMenuLabel>
        {icon}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${checkboxDropdownVariants({ dropdownSize, dropdownVariant })} `}
      >
        {dropdownVariant !== "primary" && <DropdownMenuSeparator />}
        {menu.items.map((item) => {
          return (
            <DropdownMenuItem
              key={item.id}
              textValue={item.id}
              id={item.id}
              onSelect={onSelect}
              className="cursor-pointer text-foreground flex gap-2 items-center"
            >
              <DropdownMenuLabel> {item.label}</DropdownMenuLabel>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CheckboxDropdown;
export { checkboxDropdownVariants };
