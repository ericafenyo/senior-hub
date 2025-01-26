"use server";

import { z } from "zod";
import { getAccessToken } from "@/core/auth";
import { redirect } from "next/navigation";

export const addMedication = async (
  teamId: string, state: {} | undefined, data: FormData
) => {
  try {
    const schema = z.object({
      name: z.string().min(1),
      dosage: z.string(),
      route: z.string(),
      frequency: z.string(),
      instructions: z.string(),
      startDate: z.string(),
      endDate: z.string()
    });

    const result = schema.safeParse(Object.fromEntries(data));

    if (!result.success) {
      return result.error.format();
    }

    const config: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getAccessToken()}`
      },
      body: JSON.stringify(result.data)
    };

    const url = `${process.env.API_URL}/teams/${teamId}/medications`;
    await fetch(url, config);

  } catch (error) {
    console.error(error);
  }

  redirect(`/teams/${teamId}/medications`);
};
