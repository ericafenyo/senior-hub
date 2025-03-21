"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus, PlusCircle } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { StatusFilter } from "@/components/status-filter";
import { DataTable } from "@/components/data-table";
import { redirect } from "next/navigation";
import { PartialVitalReport } from "@/types/partial-vital-report";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateVitalReport } from "@/components/create-vital-report";

export const ActionMenu = ({ report }: { report: PartialVitalReport }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => redirect(`/teams/${report.id}`)}>View</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<PartialVitalReport>[] = [
  {
    header: "Date",
    accessorKey: "recordedAt"
  },
  {
    header: "Time",
    accessorKey: "time"
  },
  {
    header: "By",
    cell: ({ row }) => `${row.original.member.firstName} ${row.original.member.lastName}`
  },
  {
    header: "No. of vitals",
    accessorKey: "vitalsCount"
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <ActionMenu report={row.original} />;
    }
  }
];

export const VitalReportTable = ({ reports }: { reports: PartialVitalReport[] }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-1 space-x-2">
            <Input className="w-[248px] h-8" placeholder="Search tasks" />
            <StatusFilter />
          </div>
          <div>
            <Dialog>
              <DialogTrigger>
                <Button className="space-x-2 h-8">
                  <Plus />
                  <span>Record new vitals</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <CreateVitalReport />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={reports} />
      </CardContent>
    </Card>
  );
};