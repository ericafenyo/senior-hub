/**
 *  A role defines access rights to a set of resources or operations.
 */
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
