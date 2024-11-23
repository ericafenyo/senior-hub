"use server";

import { z } from "zod";
import { getToken } from "@/core/auth";
import { http } from "@/api/client";

export const updateNote = async (data: FormData) => {
  const entries = Object.fromEntries(data);

  const schema = z.object({
    title: z.string(),
    content: z.string(),
    teamId: z.string().uuid(),
    noteId: z.string().uuid()
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
    console.log(error);
  }
};
