"use server";

import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";
import { Note } from "@/types";

export const getNotes = async (teamId: string): Promise<Note[]> => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`
      }
    };

    const response = await http.get<Note[]>(`/teams/${teamId}/notes`, config);
    return response.json()
  } catch (error) {
    console.error(error);
    throw error;
  }
};
