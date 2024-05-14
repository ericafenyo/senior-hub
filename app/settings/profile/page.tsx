"use server";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { updateProfile } from "./actions";
import { retrieveSection } from "@/app/auth/actions";
import { findById } from "@senior-hub/network/users";

async function Profile() {
  const session = await retrieveSection();  

  const user = await findById(session.id);

  return (
    <div>
      <form action={updateProfile}>
        {/* Personal Information */}
        <div>
          <h1>Personal Information</h1>
        </div>
        <div>
          <Input type="hidden" name="id" defaultValue={user.id} />
        </div>
        <div>
          <Label htmlFor="name">First Name</Label>
          <Input type="text" name="firstName" defaultValue={user.firstName} />
        </div>

        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input type="text" name="lastName" defaultValue={user.lastName} />
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="street">ema</Label>
          <Input type="text" name="street" defaultValue={user.address.street} />
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input type="text" name="city" defaultValue={user.address.city} />
        </div>

        <div>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input type="text" name="postalCode" defaultValue={user.address.postalCode} />
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Input type="text" name="country" defaultValue={user.address.country} disabled />
        </div>
        <div>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
