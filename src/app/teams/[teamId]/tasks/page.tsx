import React from "react";
import { Input } from "@/components/ui/input";
import { PriorityFilter } from "./priority-filter";
import { CreateTask } from "@/app/teams/[teamId]/tasks/create-task";
import { TasksTable } from "@/components/tasks-table";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

const data: any[] = [
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
// <div className="py-6 text-2xl">
//   <h2>Tasks</h2>
// </div>

const Page = async (props: Props) => {
  const params = await props.params;
  return (
    <Section>
      <SectionHeader title="Tasks" />
      <TasksTable tasks={data} />
    </Section>
  );
};

export default Page;