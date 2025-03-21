"use server";

import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";

export const createVitalReport = async (teamId: string, data: FormData): Promise<void> => {
  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  try {
    const response = await http.post("/vitals", "data", config);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};
