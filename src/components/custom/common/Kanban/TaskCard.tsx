import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader } from "@/components/ui/Card/card";
import { Button } from "@/components/ui/Button/button";
import { cva } from "class-variance-authority";
import { GripVertical } from "lucide-react";
import { Badge } from "@/components/ui/Badge/badge";
import { ColumnId } from "./TasksKanbanBoard";
import {
  CalendarIcon,
  CommentIcon,
} from "@/components/custom/common/icons/commonIcons";
import { cn } from "@/lib/utils";

export interface Task {
  id: UniqueIdentifier;
  columnId: ColumnId;
  description: string;
  priority: "high" | "medium" | "low";
  team: string[];
  deadline: string;
  noOfComments: number;
  title: string;
}

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

export type TaskType = "Task";

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

export function TaskCard({ task, isOverlay }: TaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    } satisfies TaskDragData,
    attributes: {
      roleDescription: "Task",
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva("", {
    variants: {
      dragging: {
        over: "ring-2 opacity-30",
        overlay: "ring-2 ring-primary",
      },
    },
  });

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={cn(
        variants({
          dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
        }),
        "!w-auto"
      )}
    >
      <CardHeader className="px-3 py-3 space-between flex flex-row border-b-2 border-secondary ">
        <Button
          variant={"ghost"}
          {...attributes}
          {...listeners}
          className="p-1 text-secondary-foreground/50 -ml-2 h-auto cursor-grab"
        >
          <span className="sr-only">Move task</span>
          <GripVertical />
        </Button>
        <Badge variant={"outline"} className="ml-auto font-semibold">
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap flex flex-col gap-[0.7rem]">
        <h2 className="text-foreground text-sm font-semibold">{task.title}</h2>
        <p className="text-foreground/60 text-xs">{task.description}</p>
        <div className="flex items-center text-xs text-foreground/60 gap-1">
          <CalendarIcon />
          <p>{task.deadline}</p>
        </div>
        <div className="flex items-center justify-between text-foreground/60 text-xs">
          <div className="flex items-center gap-1">
            {task.team.map((member) => {
              return <span key={member}>{member}</span>;
            })}
          </div>
          <div className="flex gap-1 items-center text-xs ">
            <CommentIcon />
            <span>{task.noOfComments}</span>
            <span>Comments</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
