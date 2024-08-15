
import React from "react";
import { Input } from "@/components/ui/input";
import { PriorityFilter } from "./priority-filter";
import { TasksTable } from "@/app/teams/[id]/tasks/tasks-table";
import { columns, TasksColumns } from "./tasks-columns";
import { CreateTask } from "@/app/teams/[id]/tasks/create-task";

const data: TasksColumns[] = [
  {
    title: "Task 1",
    completed: false,
    dueDate: new Date()
  },
  {
    title: "Task 2",
    completed: true,
    dueDate: new Date()
  }
];

type Props = {
  params: {
    id: string;
  }
}

const Page = ({ params }: Props) => {
  return (
    <main className="w-full">
      <div className="mx-6 py-6 text-2xl">
        <h2>Tasks</h2>
      </div>
      <div className="bg-background rounded mx-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 space-x-2">
            <Input className="w-[248px] h-8" placeholder="Search tasks" />
            <PriorityFilter />
          </div>
          <div>
            <CreateTask params={params} />
          </div>
        </div>
        <div>
          <TasksTable columns={columns} data={data} />
        </div>
      </div>
    </main>
  );
};

export default Page;