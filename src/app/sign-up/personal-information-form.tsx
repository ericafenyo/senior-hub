"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { FormValues, userFormContext } from "./form-context";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PersonalInformationForm = () => {
  const { setFormValues, formValues, onContinue } = userFormContext();

  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: formValues,
  });

  const submit: SubmitHandler<FormValues> = async (values: FormValues) => {
    setFormValues(values);
    onContinue();
  };

  return (
    <div className="container">
      <div className="flex justify-center py-20">
        <Card className="w-[480px]">
          <CardHeader className="px-0">
            <CardTitle className="text-lg">Personal information</CardTitle>
          </CardHeader>

          <CardContent className="px-0">
            <form onSubmit={handleSubmit(submit)} className="space-y-6">
              <div className="flex space-x-2">
                <div className="space-y-2 w-full">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    autoComplete="off"
                    placeholder=""
                    {...register("firstName")}
                  />
                </div>

                <div className="space-y-2 w-full">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    autoComplete="off"
                    placeholder=""
                    {...register("lastName")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Date of Birth</Label>
                <Input
                  autoComplete="off"
                  placeholder=""
                  {...register("birthDate")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  autoComplete="off"
                  placeholder=""
                  {...register("email")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  autoComplete="off"
                  placeholder=""
                  {...register("password")}
                />
              </div>
              <div className="flex justify-end">
                <Button>Continue</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
