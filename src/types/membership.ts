import { Team } from "@/types/team";
import { Role } from "@/types";

export type Membership = {
  /**
   * The unique identifier for the membership.
   */
  id: string;

  /**
   * The unique identifier of the team tied to the membership.
   */
  team: Team;

  /**
   * The role of the member in the team.
   */
  role: Role;

  /**
   * The permissions granted based on the role.
   */
  permissions: string[];

  /**
   * The status of the membership.
   */
  status: string;

  /**
   * The date the membership was created.
   */
  createdAt: Date;
};