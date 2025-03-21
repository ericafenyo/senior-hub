import { VitalMeasurement } from "@/types/vital-measurement";
import { PartialUser } from "@/types/partial-user";

export type PartialVitalReport = {
  id: string;
  notes: string;
  recordedAt: string;
  member: PartialUser;
  vitalCount: number;
}
