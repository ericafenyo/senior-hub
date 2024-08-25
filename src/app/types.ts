/**
 * Details of an invitation sent to a user to join a team.
 */
export type Invitation = {
  /**
   * The unique identifier of the invitation
   */
  id: string;
  /**
   * The email address of the person being invited
   */
  email: string;

  /**
   * The current status of the invitation
   */
  status: InvitationStatus;

  /**
   * The token used to validate the invitation
   */
  token: string;

  /**
   * The role that will be assigned to the member upon acceptance
   */
  role: Role;

  /**
   * The user who sent the invitation
   */
  inviter: User;

  /**
   * The team to which the member will be added
   */
  team: Team;

  /**
   * The timestamp indicating when the invitation expires
   */
  expiresAt: Date;
};

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

export enum InvitationStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  INVALIDATED = "INVALIDATED",
  DECLINED = "DECLINED"
}

/**
 * Group of users working together to provide care and support to a loved one.
 */
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

export type User = {
  /**
   * The unique identifier for the user.
   */
  id: string;

  /**
   * The first name of the user.
   */
  firstName: string;

  /**
   * The last name of the user.
   */
  lastName: string;

  /**
   * The date of birth of the user.
   */
  birthDate: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The URL pointing to the user's profile photo.
   */
  photoUrl: string;

  /**
   * Represents an address where the user leaves.
   */
  address: Address;
};

export type Address = {
  /**
   * The unique identifier for the address.
   */
  id: string;

  /**
   * Indicates a precise street address.
   */
  street: string;

  /**
   * The postal code of the address.
   */
  postalCode: string;

  /**
   * The city of the address.
   */
  city: string;

  /**
   * The country of the address.
   */
  country: string;
};
