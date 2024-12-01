import Link from "next/link";

import { getMedications } from "@/api/medications/get-medications";
import { TeamOptions } from "@/app/prop-types";
import { Medication } from "@/types";
import { MedicationDataTable } from "@/app/teams/[teamId]/medications/medication-data-table";

type Props = {
  params: Promise<TeamOptions>
}

const MedicationsPage = async ({ params }: Props) => {
  const { teamId } = await params;
  const medications: Medication[] = await getMedications(teamId);

  return (
    <div>
      <div className="container">
        <div className="">
          Medication list page
          <MedicationDataTable medications={medications} />
        </div>
      </div>
    </div>
  );
};

export default MedicationsPage;
