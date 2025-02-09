"use server";

import { getAccessToken } from "@/core/auth";
import { Membership } from "@/types";
import { buildUrl } from "@/api/utils";

export const getMemberships = async (): Promise<Membership[]> => {
  try {
    const request = new Request(buildUrl("/users/6bb06d0b-b16b-4d63-904a-a2f8497e6d09/teams"), {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`
      }
    });

    const r = await fetch(request);

    console.log(r);
    if (!r.ok) {
      return [];
    }

    return await r.json();
  } catch (error) {
    console.error("client", error);
    return [];
  }
};
