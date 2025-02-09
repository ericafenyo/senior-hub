"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { execute } from "@/api/utils";
import { getAccessToken } from "@/core/auth";

export const createAccount = async (formData: FormData): Promise<void> => {
  const entries = Object.fromEntries(formData.entries());

  const data = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    birthDate: z.string(),
    email: z.string(),
    password: z.string(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      postalCode: z.string(),
      country: z.string()
    })
  }).parse(entries);

  const request = new Request(`${process.env.API_URL}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`
    }
  });

  await execute(request);
  redirect("/login");
};
