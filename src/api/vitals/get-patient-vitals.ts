"use server";

import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";

export const getPatientVitals = async (): Promise<void> => {
  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  try {
    const response = await http.get("/teams/{{team_id}}/vital-measurements", config);
    return response.json();
  } catch (e) {
    console.error(e);
  }
}