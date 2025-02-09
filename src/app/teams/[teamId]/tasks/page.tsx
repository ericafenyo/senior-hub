import React from "react";
import { Input } from "@/components/ui/input";
import { PriorityFilter } from "./priority-filter";
import { TasksTable } from "@/app/teams/[teamId]/tasks/tasks-table";
import { columns, TasksColumns } from "./tasks-columns";
import { CreateTask } from "@/app/teams/[teamId]/tasks/create-task";

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
  params: Promise<{
    teamId: string;
  }>
}

const Page = async (props: Props) => {
  const params = await props.params;
  return (
    <section className="container">
      <div className="py-6 text-2xl">
        <h2>Tasks</h2>
      </div>
      <div className="bg-background rounded-lg border border-border p-4">
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
    </section>
  );
};

export default Page;