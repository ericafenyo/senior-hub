import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { updateProfile } from "./actions";
import { Users } from "@/packages/network";
import { retrieveSection } from "@/app/auth/actions";

async function Profile() {
  const session = await retrieveSection()
//   const user = await Users.findById();

  return (
    <div>
      <form action={updateProfile}>
        {/* Personal Information */}
        <div>
          <h1>Personal Information</h1>
        </div>
        <div>
          <Input type="hidden" name="id" value="736P89347089937" />
        </div>
        <div>
          <Label htmlFor="name">First Name</Label>
          <Input type="text" name="firstName" value="Mary" />
        </div>

        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input type="text" name="lastName" value="Smith" />
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address">ema</Label>
          <Input type="text" name="address" value="9 Rue Marguerite de Rochechouart" />
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input type="text" name="city" value="Paris" />
        </div>

        <div>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input type="text" name="postalCode" value="75009" />
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Input type="text" name="country" value="France" />
        </div>
        <div>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
