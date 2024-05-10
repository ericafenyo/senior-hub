"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { Accounts } from "@senior-hub/network";

export const authenticate = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

  const request = {
    email: email as string,
    password: password as string,
  };

  const tokens = await Accounts.authenticate(request);

  console.log(tokens);

  cookies().set("session", JSON.stringify(tokens), { httpOnly: true });

  redirect("/caretaker");
};
