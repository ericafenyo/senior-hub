"use server";

import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";

export const getVitals = async (): Promise<void> => {
  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  try {
    const response = await http.get("/vitals", config);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};
