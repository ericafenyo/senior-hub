"use server";

import { findById, updateUser } from "@/packages/network/users";

// import { Users } from "@/packages/network";

export const updateProfile = async (formData: FormData) => {
  const id = formData.get("id");

  const user = await findById(id as string);

  user.firstName = formData.get("firstName") as string;
  user.lastName = formData.get("lastName") as string;
  user.birthDate = formData.get("birthDate") as string;
  user.email = formData.get("email") as string;
  user.photoUrl = formData.get("photoUrl") as string;
  user.address.postalCode = formData.get("postalCode") as string;
  user.address.street = formData.get("street") as string;
  user.address.city = formData.get("city") as string;

  return updateUser(user);
};
