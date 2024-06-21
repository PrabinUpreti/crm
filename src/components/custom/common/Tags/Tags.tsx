import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const tagsVariants = cva(
  "text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-background",
  {
    variants: {
      variant: {
        default: "border",
        primary:
          "text-primary dark:bg-primary dark:bg-primary-foreground border border-primary",
        dark: " bg-gray-100 text-gray-800  dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ",
        red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border border-red-400",
        green:
          "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border border-green-400",
        yellow:
          "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 ",
        indigo:
          "bg-indigo-100 text-indigo-800  dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
        purple:
          "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
        pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border border-pink-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ITagsProps {
  variant?:
    | "primary"
    | "dark"
    | "red"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "default"
    | "pink";
  className?: string;
  value: string | number;
}
const Tags: React.FC<ITagsProps> = ({
  variant,
  className,
  value,
  ...props
}) => {
  return (
    <div>
      <span
        className={cn(tagsVariants({ variant: variant }), className)}
        {...props}>
        {value}
      </span>
    </div>
  );
};

export default Tags;
