import { AddMedication } from "./add-medication";
import { TeamOptions } from "@/app/prop-types";

const CreateMedicationPage = async (props: { params: Promise<TeamOptions> }) => {
  const { teamId } = await props.params;
  return (
    <div>
      <AddMedication teamId={teamId} />
    </div>
  );
};

export default CreateMedicationPage;