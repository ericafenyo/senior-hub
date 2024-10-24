import { User } from "./user";
import { Team } from "./team";

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: User;
  team: Team;
}