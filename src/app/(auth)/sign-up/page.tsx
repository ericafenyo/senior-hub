import PersonalInformation from "./personal-information";
import AddressInformation from "./address-information";
import SubmitButton from "@/components/submit-button";
import { createAccount } from "@/api/accounts/create-account";

const SignUp = async () => {
  return (
    <div className="container">
      <div className="py-20">
        <div className="w-[480px] m-auto">
          <form action={createAccount} className="space-y-12">
            <PersonalInformation />
            <AddressInformation />
            <SubmitButton>Create account</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
