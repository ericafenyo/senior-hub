"use server";

import { redirect } from "next/navigation";

import { Accounts } from "@senior-hub/network";
import { setAuthentication } from "@/core/auth";

export const authenticate = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const request = {
    email: email as string,
    password: password as string,
  };

  const tokens = await Accounts.authenticate(request);

  setAuthentication(tokens.accessToken);

  redirect("/");
};
