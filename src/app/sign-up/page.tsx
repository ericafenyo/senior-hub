"use client";

import { FormProvider } from "./form-context";
import SignUpForm from "./sign-up-form";


const SignUp = () => {
  return (
    <FormProvider>
      <SignUpForm />
    </FormProvider>
  );
};

export default SignUp;
