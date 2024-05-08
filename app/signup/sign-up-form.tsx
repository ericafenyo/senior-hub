import PersonalInformationForm from "./personal-information-form";
import AddressForm from "./address-form";
import { userFormContext } from "./form-context";

const SignUpForm = () => {
  const { step } = userFormContext();

  switch (step) {
    case 1:
      return <PersonalInformationForm />;

    case 2:
      return <AddressForm />;

    default:
      break;
  }
};

export default SignUpForm;
