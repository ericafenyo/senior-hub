"use server";

import { getAccessToken } from "@/core/auth";
import { z } from "zod";
import { Note } from "@/types/note";

type GetNoteByIdOptions = {
  teamId: string;
  noteId: string;
}

export const getNoteById = async (options: GetNoteByIdOptions): Promise<Note> => {
  try {
    const { teamId, noteId } = z.object({
      teamId: z.string(),
      noteId: z.string()
    }).parse(options);

    const url = `${process.env.API_URL}/teams/${teamId}/notes/${noteId}`;

    const config: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getAccessToken()}`
      }
    };

    return await fetch(url, config).then(res => res.json());
  } catch (error) {
    console.error(error);
    throw error;
  }
};
