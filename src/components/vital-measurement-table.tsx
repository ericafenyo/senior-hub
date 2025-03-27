"use client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { DataTable } from "@/components/data-table";
import { redirect } from "next/navigation";
import { VitalMeasurement } from "@/types/vital-measurement";
import dayjs from "dayjs";

export const ActionMenu = ({ measurement }: { measurement: VitalMeasurement }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => redirect(`/teams/${measurement.id}`)}>View</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<VitalMeasurement>[] = [
  {
    header: "Type",
    accessorKey: "type"
  },
  {
    header: "Value",
    cell: ({ row }) => {
      return `${row.original.value} ${row.original.unit}`;
    }
  },
  {
    header: "Recorded at",
    cell: ({ row }) => dayjs(row.original.recordedAt).format("dddd, MMMM D, YYYY HH:mm")
  }
];

export const VitalMeasurementTable = ({ measurements }: { measurements: VitalMeasurement[] }) => {
  return (
    <Card>
      <CardContent>
        <DataTable columns={columns} data={measurements} />
      </CardContent>
    </Card>
  );
};