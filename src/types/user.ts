import { Address } from "@/app/types";

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