import { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { BoardColumn, BoardContainer } from "./BoardColumn";
import {
  DndContext,
  type DragEndEvent,
  type DragOverEvent,
  DragOverlay,
  type DragStartEvent,
  useSensor,
  useSensors,
  KeyboardSensor,
  Announcements,
  UniqueIdentifier,
  TouchSensor,
  MouseSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { type Task, TaskCard } from "./TaskCard";
import type { Column } from "./BoardColumn";
import { hasDraggableData } from "./utils";
import { coordinateGetter } from "./multipleContainersKeyboardPreset";

const defaultCols = [
  {
    id: "tasks" as const,
    title: "Tasks",
  },
  {
    id: "project-initiation" as const,
    title: "Project Initiation",
  },
  {
    id: "requirement-approval" as const,
    title: "Approval",
  },
  {
    id: "design-completion" as const,
    title: "Design Completion",
  },

  {
    id: "prototype-completion" as const,
    title: "Prototype Completion",
  },
] satisfies Column[];

// const defaultCols = [
//   {
//     id: "pending" as const,
//     title: "Pending",
//   },
//   {
//     id: "not-started" as const,
//     title: "Not Started",
//   },
//   {
//     id: "on-progress" as const,
//     title: "On Progress",
//   },

//   {
//     id: "completed" as const,
//     title: "Completed",
//   },
// ] satisfies Column[];

export type ColumnId = (typeof defaultCols)[number]["id"];

const initialTasks = [
  {
    id: "task1",
    columnId: "tasks",
    title: "Project initiation and planning",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task2",
    columnId: "tasks",
    title: "Gather requirements from stakeholders",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task3",
    columnId: "tasks",
    title: "Create wireframes and mockups",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },

  {
    id: "task1",
    columnId: "prototype-completion",
    title: "Project initiation and planning",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task2",
    columnId: "prototype-completion",
    title: "Gather requirements from stakeholders",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task3",
    columnId: "prototype-completion",
    title: "Create wireframes and mockups",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task4",
    columnId: "design-completion",
    title: "Develop homepage layout",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task5",
    columnId: "design-completion",
    title: "Design color scheme and typography",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task6",
    columnId: "design-completion",
    title: "Implement user authentication",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task7",
    columnId: "design-completion",
    title: "Build contact us page",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task1",
    columnId: "prototype-completion",
    title: "Project initiation and planning",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task2",
    columnId: "prototype-completion",
    title: "Gather requirements from stakeholders",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task3",
    columnId: "prototype-completion",
    title: "Create wireframes and mockups",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task4",
    columnId: "design-completion",
    title: "Develop homepage layout",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task5",
    columnId: "design-completion",
    title: "Design color scheme and typography",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task6",
    columnId: "design-completion",
    title: "Implement user authentication",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task7",
    columnId: "design-completion",
    title: "Build contact us page",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task8",
    columnId: "design-completion",
    title: "Create product catalog",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task9",
    columnId: "design-completion",
    title: "Develop about us page",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task10",
    columnId: "design-completion",
    title: "Optimize website for mobile devices",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task11",
    columnId: "design-completion",
    title: "Integrate payment gateway",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task12",
    columnId: "design-completion",
    title: "Perform testing and bug fixing",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task13",
    columnId: "project-initiation",
    title: "Launch website and deploy to server",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task4",
    columnId: "project-initiation",
    title: "Develop homepage layout",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task5",
    columnId: "project-initiation",
    title: "Design color scheme and typography",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task6",
    columnId: "project-initiation",
    title: "Implement user authentication",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task7",
    columnId: "project-initiation",
    title: "Build contact us page",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task8",
    columnId: "project-initiation",
    title: "Create product catalog",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task9",
    columnId: "project-initiation",
    title: "Develop about us page",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task10",
    columnId: "project-initiation",
    title: "Optimize website for mobile devices",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task11",
    columnId: "project-initiation",
    title: "Integrate payment gateway",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task12",
    columnId: "project-initiation",
    title: "Perform testing and bug fixing",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task13",
    columnId: "project-initiation",
    title: "Launch website and deploy to server",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task4",
    columnId: "requirement-approval",
    title: "Develop homepage layout",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task5",
    columnId: "requirement-approval",
    title: "Design color scheme and typography",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task6",
    columnId: "requirement-approval",
    title: "Implement user authentication",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task7",
    columnId: "requirement-approval",
    title: "Build contact us page",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task8",
    columnId: "requirement-approval",
    title: "Create product catalog",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task9",
    columnId: "requirement-approval",
    title: "Develop about us page",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task10",
    columnId: "requirement-approval",
    title: "Optimize website for mobile devices",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task11",
    columnId: "requirement-approval",
    title: "Integrate payment gateway",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task12",
    columnId: "requirement-approval",
    title: "Perform testing and bug fixing",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
  {
    id: "task13",
    columnId: "requirement-approval",
    title: "Launch website and deploy to server",
    description:
      "This task should be completed within the week. The task is assigned to the large number of team.",
    priority: "high",
    team: ["member1", "member2"],
    deadline: "Feb 23, 2024",
    noOfComments: 3,
  },
];
export default function TasksKanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const pickedUpTaskColumn = useRef<ColumnId | null>(null);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [tasks, setTasks] = useState(initialTasks);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: coordinateGetter,
    })
  );

  function getDraggingTaskData(taskId: UniqueIdentifier, columnId: ColumnId) {
    const tasksInColumn = tasks.filter((task) => task.columnId === columnId);
    const taskPosition = tasksInColumn.findIndex((task) => task.id === taskId);
    const column = columns.find((col) => col.id === columnId);
    return {
      tasksInColumn,
      taskPosition,
      column,
    };
  }

  const announcements: Announcements = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDragStart({ active }: any) {
      if (!hasDraggableData(active)) return;
      if (active.data.current?.type === "Column") {
        const startColumnIdx = columnsId.findIndex((id) => id === active.id);
        const startColumn = columns[startColumnIdx];
        return `Picked up Column ${startColumn?.title} at position: ${
          startColumnIdx + 1
        } of ${columnsId.length}`;
      } else if (active.data.current?.type === "Task") {
        pickedUpTaskColumn.current = active.data.current.task.columnId;
        const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
          active.id,
          pickedUpTaskColumn.current || "project-initiation"
        );
        return `Picked up Task ${
          active.data.current.task.content
        } at position: ${taskPosition + 1} of ${
          tasksInColumn.length
        } in column ${column?.title}`;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDragOver({ active, over }: any) {
      if (!hasDraggableData(active) || !hasDraggableData(over)) return;

      if (
        active.data.current?.type === "Column" &&
        over.data.current?.type === "Column"
      ) {
        const overColumnIdx = columnsId.findIndex((id) => id === over.id);
        return `Column ${active.data.current.column.title} was moved over ${
          over.data.current.column.title
        } at position ${overColumnIdx + 1} of ${columnsId.length}`;
      } else if (
        active.data.current?.type === "Task" &&
        over.data.current?.type === "Task"
      ) {
        const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
          over.id,
          over.data.current.task.columnId
        );
        if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
          return `Task ${
            active.data.current.task.content
          } was moved over column ${column?.title} in position ${
            taskPosition + 1
          } of ${tasksInColumn.length}`;
        }
        return `Task was moved over position ${taskPosition + 1} of ${
          tasksInColumn.length
        } in column ${column?.title}`;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDragEnd({ active, over }: any) {
      if (!hasDraggableData(active) || !hasDraggableData(over)) {
        pickedUpTaskColumn.current = null;
        return;
      }
      if (
        active.data.current?.type === "Column" &&
        over.data.current?.type === "Column"
      ) {
        const overColumnPosition = columnsId.findIndex((id) => id === over.id);

        return `Column ${
          active.data.current.column.title
        } was dropped into position ${overColumnPosition + 1} of ${
          columnsId.length
        }`;
      } else if (
        active.data.current?.type === "Task" &&
        over.data.current?.type === "Task"
      ) {
        const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
          over.id,
          over.data.current.task.columnId
        );
        if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
          return `Task was dropped into column ${column?.title} in position ${
            taskPosition + 1
          } of ${tasksInColumn.length}`;
        }
        return `Task was dropped into position ${taskPosition + 1} of ${
          tasksInColumn.length
        } in column ${column?.title}`;
      }
      pickedUpTaskColumn.current = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDragCancel({ active }: any) {
      pickedUpTaskColumn.current = null;
      if (!hasDraggableData(active)) return;
      return `Dragging ${active.data.current?.type} cancelled.`;
    },
  };

  return (
    <DndContext
      accessibility={{
        announcements,
      }}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}>
      <BoardContainer>
        <SortableContext items={columnsId}>
          {columns.map((col) => (
            <BoardColumn
              key={col.id}
              column={col}
              tasks={tasks.filter((task) => task.columnId === col.id)}
            />
          ))}
        </SortableContext>
      </BoardContainer>

      {"document" in window &&
        createPortal(
          <DragOverlay className="">
            {activeColumn && (
              <BoardColumn
                isOverlay
                column={activeColumn}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id
                )}
              />
            )}
            {activeTask && <TaskCard task={activeTask} isOverlay />}
          </DragOverlay>,
          document.body
        )}
    </DndContext>
  );

  function onDragStart(event: DragStartEvent) {
    if (!hasDraggableData(event.active)) return;
    const data = event.active.data.current;
    if (data?.type === "Column") {
      setActiveColumn(data.column);
      return;
    }

    if (data?.type === "Task") {
      setActiveTask(data.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (!hasDraggableData(active)) return;

    const activeData = active.data.current;

    if (activeId === overId) return;

    const isActiveAColumn = activeData?.type === "Column";
    if (!isActiveAColumn) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    const isActiveATask = activeData?.type === "Task";
    const isOverATask = overData?.type === "Task";

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        const activeTask = tasks[activeIndex];
        const overTask = tasks[overIndex];
        if (
          activeTask &&
          overTask &&
          activeTask.columnId !== overTask.columnId
        ) {
          activeTask.columnId = overTask.columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = overData?.type === "Column";

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const activeTask = tasks[activeIndex];
        if (activeTask) {
          activeTask.columnId = overId as ColumnId;
          return arrayMove(tasks, activeIndex, activeIndex);
        }
        return tasks;
      });
    }
  }
}
