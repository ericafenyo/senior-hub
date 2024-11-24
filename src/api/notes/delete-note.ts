"use server";

import { z } from "zod";
import { getToken } from "@/core/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const deleteNote = async (data: any) => {
  try {
    const { teamId, noteId } = z.object({
      noteId: z.string(),
      teamId: z.string()
    }).parse(data);

    const config: RequestInit = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    };

    await fetch(`${process.env.API_URL}/teams/${teamId}/notes/${noteId}`, config);
    // revalidatePath(`/teams/${teamId}/notes/${noteId}`);
  } catch (error) {
    console.error(error);
  }

  redirect(`/teams/${data.teamId}/notes`);
};
