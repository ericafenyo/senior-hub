"use server";

import { http } from "@/api/client";
import { getAuthentication } from "@/core/auth";

export const validateInvitation = async (token: string) => {
  const authentication = await getAuthentication();

  const config = {
    headers: {
      Authorization: `Bearer ${authentication.token}`,
    },
  };

  try {
    const response = await http.post(`/invitations/validate`, { token }, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
