import React from "react";
import { useCalendar } from "../contexts/PlannerContext";
import { cn } from "@/lib/utils";
import { TableHead, TableHeader, TableRow } from "@/components/ui/Table/table";

export const Timeline: React.FC<React.HTMLAttributes<HTMLDivElement>> = () =>
   

  {
    const { timeLabels } = useCalendar();

    return (
      <TableHeader>
        <TableRow className="bg-background">
          <TableHead></TableHead>
          {timeLabels.map((label, index) => (
            <TableHead
              key={label}
              className={cn(
                "sticky top-0 z-10 bg-background border-x min-w-56 text-center lg:min-w-72 "
              )}
            >
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
    );
  };
