import { withVariants } from "@udecode/cn";
import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "flex w-full rounded-md bg-transparent text-sm file:border-0 file:bg-background file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-input ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ghost: "border-none focus-visible:ring-transparent",
      },
      h: {
        sm: "h-9 px-3 py-2",
        md: "h-10 px-3 py-2",
      },
      size: {
        sm: "w-[8rem]",
        md: "w-[15rem]",
        lg: "w-[20rem]",
        xl: "w-[25rem]",
        default: "w-[10rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      h: "md",
    },
  }
);

export const Input = withVariants("input", inputVariants, ["variant", "h"]);
