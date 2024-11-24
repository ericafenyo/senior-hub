"use server";

import { getToken } from "@/core/auth";
import { http } from "@/api/client";
import { Note } from "@/types";

export const getNotes = async (teamId: string): Promise<Note[]> => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    };

    const response = await http.get<Note[]>(`/teams/${teamId}/notes`, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
