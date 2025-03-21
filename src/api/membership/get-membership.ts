"use server";

import { Membership } from "@/types";
import { getAccessToken, getAuthentication } from "@/core/auth";
import { http } from "@/api/utils";

export const getMembership = async (teamId: string): Promise<Membership> => {
  const authentication = await getAuthentication();

  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  const response = await http.get(`/teams/${teamId}/members/${authentication.id}`, config);
  return response.json();
};
