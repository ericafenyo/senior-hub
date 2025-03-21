"use server";

import { redirect } from "next/navigation";
import { clearAuthentication } from "@/core/auth";

export const signOut = async () => {
  clearAuthentication()
    .finally(() => {
    console.log("Signed out");
  });

  redirect("/sign-in");
};
