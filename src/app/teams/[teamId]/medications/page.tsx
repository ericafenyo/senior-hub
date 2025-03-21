import { getMedications } from "@/api/medications/get-medications";
import { TeamOptions } from "@/app/prop-types";
import { Medication } from "@/types/medication";
import { MedicationsTable } from "@/components/medications-table";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

type Props = {
  params: Promise<TeamOptions>
}

const MedicationsPage = async ({ params }: Props) => {
  const { teamId } = await params;
  const medications: Medication[] = await getMedications(teamId);

  return (
    <Section>
      <SectionHeader title="Medications" />
      <MedicationsTable medications={medications} />
    </Section>
  );
};

export default MedicationsPage;
