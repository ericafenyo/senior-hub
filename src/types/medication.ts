import { User } from "@/types/user";
import { Team } from "@/types/team";

export  type Medication = {
  /**
   * The unique identifier for the medication.
   */
  id: string;
  /**
   * The name of the medication administered or taken by the user.
   */
  name: string;
  /**
   * The dosage of the medication.
   */
  dosage: string;
  /**
   * The method by which the medication is to be taken.
   */
  route: string;
  /**
   * The frequency at which the medication is to be taken.
   */
  frequency: string;

  /**
   * The instructions for taking the medication.
   */
  instructions: string;

  /**
   * The date the medication is to be taken.
   */
  startDate: Date;
  /**
   * The date the medication is to be stopped.
   */
  endDate: Date;

  /**
   * The user associated with the medication record.
   */
  user: User;

  /**
   * The team associated with the medication record.
   */
  team: Team;
}