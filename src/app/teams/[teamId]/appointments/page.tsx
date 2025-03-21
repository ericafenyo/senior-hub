import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/section";
import { Calendar } from "lucide-react";
import { AppointmentTable } from "@/components/appointments-table";

const AppointmentsPage = () => {
  return (
    <Section>
      <SectionHeader title="Appointments"/>
      <AppointmentTable appointments={[]} />
    </Section>
  );
};

export default AppointmentsPage;