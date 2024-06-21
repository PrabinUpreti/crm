"use client";

import * as React from "react";

import { Progress } from "@/components/ui/Progress/progress";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IProgressBarProps } from "@/@types";

const progressBarVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-primary/10",
      secondary: "bg-black/10",
    },
    size: {
      default: "w-[250px]",
      lg: "w-[400px]",
      md: "w-[300px]",
      sm: "w-[100px]",
      full: "w-full min-w-[100px] max-w-[700px]",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "primary",
  },
});

export default function ProgressBar({
  value,
  size,
  variant,
  className,
  showValue,
}: IProgressBarProps): React.ReactNode {
  return (
    <Progress
      // asChild
      value={value}
      className={cn(progressBarVariants({ variant, size, className }))}>
      {showValue && value}
    </Progress>
  );
}

export { progressBarVariants };
