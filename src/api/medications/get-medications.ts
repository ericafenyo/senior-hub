"use server";

import { getAccessToken } from "@/core/auth";
import { Medication } from "@/types";

export const getMedications = async (teamId: string): Promise<Medication[]> => {
  const config: RequestInit = {
    method: "GET",
    headers: {
      "Accept": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  const response = await fetch(`${process.env.API_URL}/teams/${teamId}/medications`, config);
  return response.json();
};
