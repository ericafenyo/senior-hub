import { User } from "./user";
import { Team } from "@/types/team";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  assignees: User[];
  team: Team;
}
