import { Form } from "@/components/form";
import { Input } from "@/components/ui/input";

export const EditMedication = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <Input id="name" name="name" type="text" placeholder="Name" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="dosage">Dosage</label>
          <Input id="dosage" name="dosage" type="text" placeholder="Dosage" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="frequency">Frequency</label>
          <Input id="frequency" name="frequency" type="text" placeholder="Frequency" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="startDate">Frequency</label>
          <Input id="startDate" name="startDate" type="datetime-local" placeholder="Start Date" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="endDate">Frequency</label>
          <Input id="endDate" name="endDate" type="datetime-local" placeholder="End Date" />
        </Form.Field>
      </Form>
    </div>
  );
};
