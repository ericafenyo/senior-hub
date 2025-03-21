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
import { redirect } from "next/navigation";
import { Membership } from "@/types";

export const ActionMenu = ({ membership }: { membership: Membership }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => redirect(`/teams/${membership.id}`)}>View</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Membership>[] = [
  {
    header: "Name",
    cell: ({ row }) => {
      return `${row.original.user.firstName} ${row.original.user.lastName}`;
    }
  },
  {
    header: "Role",
    cell: ({ row }) => {
      return row.original.role.slug;
    },
  },
  {
    header: "Status",
    accessorKey: "status"
  },
  {
    header: "Date Joined",
    cell: ({ row }) => {
      return new Date(row.original.createdAt).toLocaleDateString();
    }
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      return <ActionMenu membership={row.original} />;
    }
  }
];

export const TeamMemberTable = ({ membership }: { membership: Membership[] }) => {
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
        <DataTable columns={columns} data={membership} />
      </CardContent>
    </Card>
  );
};
