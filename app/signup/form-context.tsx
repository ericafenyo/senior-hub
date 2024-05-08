import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

export interface FormValues {
  email: string;
  password: string;
  firstName: string;
  birthDate: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

interface State {
  step: number;
  onContinue: () => void;
  onPrevious: () => void;
  formValues: FormValues;
  setFormValues: (inputs: any) => void;
}

const initialFormValues = {
  email: "",
  password: "",
  firstName: "",
  birthDate: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
  country: "",
};

const initialState: State = {
  onContinue: () => {},
  onPrevious: () => {},
  setFormValues: () => {},
  step: 1,
  formValues: initialFormValues,
};

export const FormContext = createContext<State>(initialState);

export const FormProvider = ({ children }: Props) => {
  const [step, setStep] = useState(1);
  const [formValues, updateFormValues] = useState(initialFormValues);

  const onContinue = () => {
    setStep((value) => value + 1);
  };

  const onPrevious = () => {
    setStep((value) => value - 1);
  };

  const setFormValues = (incomingValues: FormValues) => {
    updateFormValues((currentValues) => ({
      ...currentValues,
      ...incomingValues,
    }));
  };

  return (
    <FormContext.Provider value={{ onContinue, onPrevious, step, formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export const userFormContext = () => useContext(FormContext);
