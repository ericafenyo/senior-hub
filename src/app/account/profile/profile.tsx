"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { DateInput } from "@/components/date-input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { className } from "postcss-selector-parser";

type ProfileProps = {
  firstName: string;
  lastName: string;
  birthday: Date;
}

export const Profile = (props: Partial<ProfileProps>) => {
  return (
    <form>
      <Card className="my-6">
        <CardContent className="pt-6">

          <div className="flex gap-2">
            <div className="space-y-2 flex-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                className="h-12"
                autoComplete="off"
                placeholder="Enter First Name"
                name="firstName"
                id="firstName"
                defaultValue={props.firstName}
              />
            </div>

            <div className="space-y-2 flex-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                className="h-12"
                autoComplete="off"
                placeholder="Enter Last Name"
                name="lastName"
                id="lastName"
                defaultValue={props.lastName}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthDate">Date of birth</Label>
            <DateInput
              className="h-12"
              placeholder="Enter Birth Date"
              value={props.birthday}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </form>
  );
};