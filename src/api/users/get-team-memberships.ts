"use server";

import { getAccessToken, getAuthentication } from "@/core/auth";
import { Membership } from "@/types";
import { buildUrl } from "@/api/utils";

export const getMemberships = async (): Promise<Membership[]> => {
  try {
    const authentication = await getAuthentication();
    const accessToken = await getAccessToken();
    const request = new Request(buildUrl(`/users/${authentication.id}/teams`), {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const r = await fetch(request);

    console.log({
      status: r.status,
      isOk: r.ok,
      accessToken
    });


    if (!r.ok) {
      return [];
    }

    return await r.json();
  } catch (error) {
    console.error("client", error);
    return [];
  }
};
