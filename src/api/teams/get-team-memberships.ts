"use server";

import { Membership } from "@/types";
import { getAccessToken } from "@/core/auth";
import { buildUrl } from "@/api/utils";

/**
 * Get a list of team memberships
 *
 * @param teamId The ID of the team
 */
export const getTeamMemberships = async (teamId: string): Promise<Membership[]> => {
  const accessToken = await getAccessToken();

  const request = new Request(buildUrl(`/teams/${teamId}/memberships`), {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const response = await fetch(request);
  return response.json();
};
