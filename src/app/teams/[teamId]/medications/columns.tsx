"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Medication } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, MoreHorizontal, Pen, Trash } from "lucide-react";

export const columns: ColumnDef<Medication>[] = [
  {
    header: "Name",
    accessorKey: "name"
  },
  {
    header: "Dosage",
    accessorKey: "dosage"
  },
  {
    header: "Route",
    accessorKey: "route"
  },
  {
    header: "Frequency",
    accessorKey: "frequency"
  },
  {
    header: "Start Date",
    accessorKey: "startDate"
  },
  {
    header: "End Date",
    accessorKey: "endDate"
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

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
    }
  }
];