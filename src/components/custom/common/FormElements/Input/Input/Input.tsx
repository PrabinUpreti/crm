import { cva } from "class-variance-authority";
import { Input as ShadInput } from "@/components/ui/Input/input";
import { cn } from "@/lib/utils";
import * as React from "react";
import { InputProps } from "@/@types";

const inputVariants = cva("", {
  variants: {
    size: {
      sm: "w-[10rem]",
      md: "w-[15rem]",
      lg: "w-[20rem]",
      xl: "w-[30rem]",
      default: "w-[25rem]",
    },
  },
});

const Input: React.FC<InputProps> = ({ size, className, ...props }) => {
  return (
    <ShadInput className={cn(inputVariants({ size }), className)} {...props} />
  );
};

export default Input;
export { inputVariants };
