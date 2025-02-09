"use server";

import { getAccessToken } from "@/core/auth";
import { Team } from "@/types";
import { buildUrl } from "@/api/utils";

export const getUserTeams = async (): Promise<Team[]> => {
  try {
    const request = new Request(buildUrl("/teams"), {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`
      }
    });

    const r = await fetch(request);
    if (!r.ok) {
      return [];
    }

    return await r.json();
  } catch (error) {
    console.error("client", error);
    return [];
  }
};
