import { EditMedication } from "./edit-medication";

const EditMedicationPage = async (props: any) => {
  const params = await props.match.params();

  console.log(params);

  return (
    <div>
      Edit Medication Page
      <EditMedication />
    </div>
  );
};

export default EditMedicationPage;