// @flow
import * as React from "react";
import { addTeamMember } from "@/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { capitalize } from "@/utilities";
import { Button } from "@/components/ui/button";

type Props = {};

export const AddMember = (props: Props) => {
  return (
    <div>
      <form action={addTeamMember}>
        <label htmlFor="email">Enter your email address</label>
        <Input name="email" type="text" placeholder="Email Address" />
        <Label htmlFor="role">Select a role for the team member</Label>
        <Select name="role">
          <SelectTrigger>
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            {/*{*/}
            {/*  roles.map(role => (<SelectItem value={role.name} key={role.id}>{capitalize(role.name)}</SelectItem>))*/}
            {/*}*/}
          </SelectContent>
        </Select>
        <Input name="teamId" type="hidden" value={params.teamId} />
        <Button>Add</Button>
      </form>
    </div>
  );
};