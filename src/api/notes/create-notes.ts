"use server";

import { z } from "zod";
import { getToken } from "@/core/auth";
import { http } from "@/api/client";
import { redirect } from "next/navigation";

export const createNote = async (data: FormData) => {
  const entries = Object.fromEntries(data);

  const schema = z.object({
    title: z.string(),
    content: z.string(),
    teamId: z.string()
  });

  try {
    const { teamId, ...request } = schema.parse(entries);
    const config = {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    };

    await http.post(`/teams/${teamId}/notes`, request, config);
  } catch (error) {
    console.error(error);
  }

  redirect(`/teams/${data.get("teamId")}/notes`);
};
