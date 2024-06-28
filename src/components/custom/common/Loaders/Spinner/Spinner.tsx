import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const spinnerVariants = cva(
  " w-full flex  flex-col items-center justify-center",
  {
    variants: {
      show: {
        true: "flex",
        false: "hidden",
      },
    },
    defaultVariants: {
      show: true,
    },
  }
);

const loaderVariants = cva("animate-spin text-primary", {
  variants: {
    size: {
      small: "size-6",
      medium: "size-8",
      large: "size-12",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export default function Spinner({
  size,
  show,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <div className={cn(spinnerVariants({ show }))}>
      <Loader2 className={cn(loaderVariants({ size }), className)} />
      {children}
    </div>
  );
}
