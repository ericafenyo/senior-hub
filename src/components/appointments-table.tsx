"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
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
import { Appointment } from "@/types/appointment";

export const ActionMenu = ({ appointment }: { appointment: Appointment }) => {
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

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "Title",
    accessorKey: "title"
  },
  {
    header: "Location",
    accessorKey: "location"
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
    header: "Actions",
    cell: ({ row }) => {
      return <ActionMenu appointment={row.original} />;
    }
  }
];

export const AppointmentTable = ({ appointments }: { appointments: Appointment[] }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 space-x-2">
            <Input className="w-[248px] h-8" placeholder="Search" />
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
        <DataTable columns={columns} data={appointments} />
      </CardContent>
    </Card>
  );
};
