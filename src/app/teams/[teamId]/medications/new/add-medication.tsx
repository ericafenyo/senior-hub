"use client";

import { Form } from "@/components/form";
import { Input } from "@/components/ui/input";
import { addMedication } from "@/api/medications/add-medications";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React, { useActionState } from "react";
import { TeamOptions } from "@/app/prop-types";
import { DateInput } from "@/components/date-input";

// TODO: Constrain the medication dosage and route and frequency to a constant
// Then when the user chose, other, display a field to enter the usage.

export const AddMedication = ({ teamId }: TeamOptions) => {
  const [errors, action, isLoading] = useActionState(addMedication.bind(null, teamId), undefined);

  return (
    <div>
      <Form action={action}>
        <div>Add medication</div>
        <Form.Field>
          <label htmlFor="name">Name</label>
          <Input id="name" name="name" type="text" placeholder="Name" />
          <span className="mt-2 text-sm text-red-700 dark:text-red-500">{errors?.name?._errors[0] ?? ""}</span>
        </Form.Field>
        <Form.Field>
          <label htmlFor="dosage">Dosage</label>
          <Input id="dosage" name="dosage" type="text" placeholder="Dosage" />
          <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors?.dosage?._errors[0] ?? ""}</span>
        </Form.Field>
        <Form.Field>
          <label htmlFor="frequency">Frequency</label>
          <Input id="frequency" name="frequency" type="text" placeholder="Frequency" />
          <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors?.frequency?._errors[0] ?? ""}</span>
        </Form.Field>
        <Form.Field>
          <label htmlFor="route">Route</label>
          <Input id="route" name="route" type="text" placeholder="Route" />
          <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors?.route?._errors[0] ?? ""}</span>
        </Form.Field>
        <Form.Field>
          <label htmlFor="startDate">Start Date</label>
          <DateInput id="startDate" name="startDate" placeholder="Start Date" />
          <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors?.startDate?._errors[0] ?? ""}</span>
        </Form.Field>
        <Form.Field>
          <label htmlFor="endDate">End Date</label>
          <DateInput id="endDate" name="endDate" placeholder="End Date" />
          <span className="mt-2 text-sm text-red-600 dark:text-red-500">{errors?.endDate?._errors[0] ?? ""}</span>
        </Form.Field>

        <Form.Field>
          <label htmlFor="instructions">Instructions</label>
          <Textarea id="instructions" name="instructions" placeholder="Instructions" />
        </Form.Field>

        <Button type="submit" disabled={isLoading}>Add Medication</Button>
      </Form>
    </div>
  );
};
