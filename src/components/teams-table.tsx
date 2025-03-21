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
import { Membership } from "@/types";
import { StatusFilter } from "@/components/status-filter";
import { DataTable } from "@/components/data-table";
import { redirect } from "next/navigation";

export const ActionMenu = ({ membership }: { membership: Membership }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => redirect(`/teams/${membership.team.id}?roleId=300d4273-e57c-11ef-8051-005056586ffc`)}>View</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Membership>[] = [
  {
    header: "Name",
    accessorKey: "team.name"
  },
  {
    header: "Role",
    accessorKey: "role.slug"
  },
  {
    header: "Membership status",
    accessorKey: "status"
  },
  {
    header: "Date joined",
    accessorKey: "createdAt"
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <ActionMenu membership={row.original} />;
    }
  }
];

export const TeamsTable = ({ memberships }: { memberships: Membership[] }) => {
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
        <DataTable columns={columns} data={memberships} />
      </CardContent>
    </Card>
  );
};