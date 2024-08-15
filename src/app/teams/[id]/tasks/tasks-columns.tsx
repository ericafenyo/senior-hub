"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Circle, CircleCheck } from "lucide-react";

export type TasksColumns = {
  title: string;
  completed: boolean;
  dueDate: Date;
};

export const columns: ColumnDef<TasksColumns>[] = [
  {
    id: "completed",
    header: "",
    accessorKey: "completed",
    cell: (cell) => {
      return cell.getValue() ? <CircleCheck className="h-5 w-5" /> : <Circle className="h-5 w-5" />;
    }
  },
  {
    header: "Title",
    accessorKey: "title"
  },
  {
    header: "Due Date",
    accessorKey: "dueDate"
  }
];
