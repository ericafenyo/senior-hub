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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
