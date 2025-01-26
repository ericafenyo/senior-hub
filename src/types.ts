export type Role = {
  /**
   * The unique identifier for the role.
   */
  id: string;

  /**
   * The name of the role
   */
  name: string;

  /**
   * Human-readable name of the role
   */
  slug: string;

  /**
   * A brief description or explanation of the role.
   */
  description: string;
}

export type Team = {
  /**
   * The unique identifier of the team.
   */
  id: String;

  /**
   * The name of the team.
   */
  name: String;

  /**
   * A brief description of the team.
   */
  description: String;
}

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
