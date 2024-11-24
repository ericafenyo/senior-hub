"use server";

import { z } from "zod";
import { getToken } from "@/core/auth";
import { http } from "@/api/client";
import { revalidatePath } from "next/cache";
import { router } from "next/client";
import { redirect } from "next/navigation";

export const updateNote = async (data: FormData) => {
  const entries = Object.fromEntries(data);

  console.log(entries);

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
        Authorization: `Bearer ${await getToken()}`
      }
    };

    return await http.patch(`/teams/${teamId}/notes/${noteId}`, request, config)
      .then(response => response.data);
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/teams/${data.get("teamId")}/notes/${data.get("noteId")}`);
};
