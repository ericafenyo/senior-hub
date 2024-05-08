"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormValues, userFormContext } from "./form-context";

const AddressForm = () => {
  const { onPrevious, setFormValues, formValues } = userFormContext();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: formValues,
  });

  const submit: SubmitHandler<FormValues> = async (values: FormValues) => {
    setFormValues(values);
  };

  return (
    <div className="container">
      <div className="flex justify-center py-20">
        <Card className="w-[480px]">
          <CardHeader className="px-0">
            <CardTitle className="text-lg">Address</CardTitle>
          </CardHeader>

          <CardContent className="px-0">
            <form onSubmit={handleSubmit(submit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="street">Street address</Label>
                <Input
                  autoComplete="off"
                  placeholder=""
                  {...register("street")}
                />
              </div>
              <div className="flex space-x-2">
                <div className="space-y-2 w-full">
                  <Label htmlFor="city">City</Label>
                  <Input
                    autoComplete="off"
                    placeholder=""
                    {...register("city")}
                  />
                </div>

                <div className="space-y-2 w-full">
                  <Label htmlFor="postalCode">Zip/Postal code</Label>
                  <Input
                    autoComplete="off"
                    placeholder=""
                    {...register("postalCode")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  autoComplete="off"
                  placeholder=""
                  {...register("country")}
                />
              </div>

              <div className="flex space-x-2 justify-end">
                <Button onClick={onPrevious} variant="outline">
                  Previous
                </Button>
                <Button>Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddressForm;
