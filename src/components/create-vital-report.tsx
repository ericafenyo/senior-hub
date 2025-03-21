"use client";

import { Form } from "@/components/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

export const CreateVitalReport = () => {
  return (
    <Form action={""}>
      <h3 className="prose">Create vital report</h3>
      <div className="grid grid-cols-2 gap-4">
        <Form.Field>
          <Label>Body Temperature</Label>
          <Input id="temperature" name="temperature" type="text" placeholder="" />
        </Form.Field>
        <Form.Field>
          <Label>Heart Rate (Pulse)</Label>
          <Input id="temperature" name="temperature" type="text" placeholder="" />
        </Form.Field>
        <Form.Field>
          <Label>Respiratory Rate</Label>
          <Input id="temperature" name="temperature" type="text" placeholder="" />
        </Form.Field>
        <Form.Field>
          <Label>Blood Pressure</Label>
          <Input id="temperature" name="temperature" type="text" placeholder="" />
        </Form.Field>
        <Form.Field>
          <Label>Oxygen Saturation</Label>
          <Input id="temperature" name="temperature" type="text" placeholder="" />
        </Form.Field>
        <Form.Field>
          <Label>Blood Glucose Levels</Label>
          <Input id="temperature" name="temperature" type="text" placeholder="" />
        </Form.Field>
      </div>

      <Form.Field>
        <Label>Notes</Label>
        <Textarea id="notes" name="notes" placeholder="" />
      </Form.Field>
    </Form>
  );
};