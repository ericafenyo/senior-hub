"use server";

import { redirect } from "next/navigation";

import { setAuthentication } from "@/core/auth";
import { Accounts } from "@/services/accounts";

export const authenticate = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const request = {
    email: email as string,
    password: password as string
  };

  try {
    const tokens = await Accounts.authenticate(request);


    await setAuthentication(tokens);
  } catch (e) {
    console.error(e);
  }

  redirect("/teams");
};
