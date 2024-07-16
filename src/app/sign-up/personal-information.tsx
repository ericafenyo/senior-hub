import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/form-field";

const PersonalInformation = () => {

  return (
    <div className="space-y-6">
      <h2 className="text-lg">Personal Information</h2>
      <div className="flex gap-2">
        <FormField label="First name" htmlFor="firstName" className="flex-1">
          <Input
            autoComplete="off"
            placeholder=""
            name="firstName"
            id="firstName"
            value="Pierre"
          />
        </FormField>


        <FormField htmlFor="lastName" label="Last name" className="flex-1">
          <Input
            autoComplete="off"
            placeholder=""
            name="lastName"
            id="lastName"
            value="Martin"
          />
        </FormField>
      </div>

      <FormField htmlFor="birthDate" label="Date of Birth">
        <Input
          autoComplete="off"
          placeholder=""
          name="birthDate"
          id="birthDate"
          value="1957-08-30"
        />
      </FormField>

      <FormField htmlFor="email" label="Email Address">
        <Input
          autoComplete="off"
          placeholder=""
          name="email"
          id="email"
          value="pierre.martin@example.fr"
        />
      </FormField>

      <FormField htmlFor="password" label="Password">
        <Label htmlFor="password">Password</Label>
        <Input
          autoComplete="off"
          placeholder=""
          name="password"
          id="password"
          value="6uV6vc7hn307kblg"
        />
      </FormField>
    </div>
  );
};

export default PersonalInformation;
