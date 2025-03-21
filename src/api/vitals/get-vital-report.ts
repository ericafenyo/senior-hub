"use server";

import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";

export const getVitalReport = async (): Promise<void> => {
  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  try {
    const response = await http.get("/teams/{{team_id}}/vital-reports/{{report_id}}", config);
    return response.json();
  } catch (e) {
    console.error(e);
  }
}