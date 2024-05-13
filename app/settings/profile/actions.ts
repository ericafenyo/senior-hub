"use server";

import { Users } from "@/packages/network";

export const updateProfile = async (formData: FormData) => {
  const id = formData.get("id");

  const currentUser = await Users.findById(id as string);

  currentUser.firstName = formData.get("firstName") as string;
  currentUser.lastName = formData.get("lastName") as string;
  currentUser.birthDate = formData.get("birthDate") as string;
  currentUser.email = formData.get("email") as string;
  currentUser.photoUrl = formData.get("photoUrl") as string;
  currentUser.address.postalCode = formData.get("postalCode") as string;
  currentUser.address.street = formData.get("street") as string;
  currentUser.address.city = formData.get("city") as string;
  currentUser.address.country = formData.get("country") as string;

  console.log(formData);
};
