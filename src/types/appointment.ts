import { Team } from "@/types";

export type Appointment = {
    id: string;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    team: Team
}