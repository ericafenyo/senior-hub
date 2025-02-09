"use server";

import { http } from "@/api/utils";
import { getAccessToken } from "@/core/auth";

export const validateInvitation = async (token: string) => {

  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  try {
    const response = await http.post(`/invitations/validate`, JSON.stringify({ token }), config);
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
