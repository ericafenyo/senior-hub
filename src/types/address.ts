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
