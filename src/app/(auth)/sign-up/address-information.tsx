import { Input } from "@/components/ui/input";
import { FormField } from "@/components/form-field";

const AddressInformation = () => {
  return (
    <div className="space-y-6">

      <h2 className="text-lg">Address Information</h2>

      <FormField htmlFor="street" label="Street address">
        <Input
          autoComplete="off"
          placeholder=""
          name="street"
          id="street"
          value={"12 Rue de la République"}
        />
      </FormField>
      <div className="flex gap-2">
        <FormField htmlFor="city" label="City" className="flex-1">
          <Input
            autoComplete="off"
            placeholder=""
            name="city"
            id="city"
            value={"Marseille"}
          />
        </FormField>

        <FormField htmlFor="postalCode" label="Postal code" className="flex-1">
          <Input
            autoComplete="off"
            placeholder=""
            name="postalCode"
            id="postalCode"
            value={"13002"}
          />
        </FormField>
      </div>

      <FormField htmlFor="country" label="Country">
        <Input
          autoComplete="off"
          placeholder=""
          name="country"
          readOnly={true}
          id="country"
          value="France"
        />
      </FormField>
    </div>
  );
};

export default AddressInformation;
