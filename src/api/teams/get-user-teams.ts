'use server';

import {http} from "../client";
import {getToken} from "@/core/auth"
import {Team} from "@/types";

export const getUserTeams = async (id: string): Promise<Team[]> => {
  try {
    const token = await getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await http.get(`/users/${id}/teams`, config);
    console.log("client", response);

    return response.data;
  } catch (error) {
    console.error("client", error);
    return [];
  }
}
