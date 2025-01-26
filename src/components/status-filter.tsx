import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import React from "react";

export const StatusFilter = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-8">
            <PlusCircle className="w-4 h-4 mr-2" />
            Status
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Active</DropdownMenuItem>
          <DropdownMenuItem>Suspended</DropdownMenuItem>
          <DropdownMenuItem>Pending</DropdownMenuItem>
          <DropdownMenuItem>Rejected</DropdownMenuItem>
          <DropdownMenuItem>Cancelled</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
