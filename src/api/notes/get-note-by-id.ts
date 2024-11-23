"use server";

import { getToken } from "@/core/auth";
import { Note } from "@/types";
import { LRUCache } from "lru-cache";
import { z } from "zod";

type GetNoteByIdOptions = {
  teamId: string;
  noteId: string;
}

export const getNoteById = async (options: GetNoteByIdOptions): Promise<Note> => {
  console.log({ options });

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
        Authorization: `Bearer ${await getToken()}`
      }
    };

    return await fetch(url, config).then(res => res.json());
  } catch (error) {
    console.error(error);
    throw error;
  }
};
