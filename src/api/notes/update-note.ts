"use server";

import { z } from "zod";
import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";
import { revalidatePath } from "next/cache";
import { router } from "next/client";
import { redirect } from "next/navigation";

export const updateNote = async (data: FormData) => {
  const entries = Object.fromEntries(data);

  const schema = z.object({
    title: z.string(),
    content: z.string(),
    teamId: z.string(),
    noteId: z.string()
  });

  try {
    const { teamId, noteId, ...request } = schema.parse(entries);
    const config = {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`
      }
    };

    return await http.patch(`/teams/${teamId}/notes/${noteId}`, JSON.stringify(request), config)
      .then(response => response.json);
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/teams/${data.get("teamId")}/notes/${data.get("noteId")}`);
};
