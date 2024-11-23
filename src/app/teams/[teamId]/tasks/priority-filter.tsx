import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const PriorityFilter = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="h-8">
            <PlusCircle className="w-4 h-4 mr-2" />
            Priority
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
