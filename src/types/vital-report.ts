import { VitalMeasurement } from "@/types/vital-measurement";
import { PartialUser } from "@/types/partial-user";

export type VitalReport = {
  id: string;
  notes: string;
  recordedAt: string;
  member: PartialUser;
  measurements: VitalMeasurement[];
}
