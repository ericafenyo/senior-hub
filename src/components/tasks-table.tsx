"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { Circle, CircleCheck, MoreHorizontal, Plus } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { StatusFilter } from "@/components/status-filter";
import { DataTable } from "@/components/data-table";
import { PartialVitalReport } from "@/types/partial-vital-report";
import { Task } from "@/types/task";

export const ActionMenu = ({ task }: { task: Task }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Task>[] = [
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
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <ActionMenu task={row.original} />;
    }
  }
];

export const TasksTable = ({ tasks }: { tasks: Task[] }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 space-x-2">
            <Input className="w-[248px] h-8" placeholder="Search tasks" />
            <StatusFilter />
          </div>
          <div>
            <Button className="space-x-2 h-8">
              <Plus />
              <span>Add team</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={tasks} />
      </CardContent>
    </Card>
  );
};