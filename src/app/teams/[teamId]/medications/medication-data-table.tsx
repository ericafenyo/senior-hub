import { Medication } from "@/types";
import { TasksTable } from "@/app/teams/[teamId]/tasks/tasks-table";
import { columns } from "@/app/teams/[teamId]/medications/columns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export const MedicationDataTable = ({ medications }: { medications: Medication[] }) => {
  return (
    <div className="">
      <div className="flex mb-5 justify-between items-center">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input className="pl-8" placeholder="Filter names..." />
        </div>

        <Button>
          <Plus />
          <Link href="medications/new">Add medication</Link>
        </Button>
      </div>
      <div className="border shadow-sm rounded">

        <TasksTable columns={columns} data={medications} />
      </div>
    </div>
  );
};