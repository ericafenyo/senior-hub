"use server";

import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";


export const acceptInvitation = async (state: any, formData: FormData) => {
  const { token } = Object.fromEntries(formData);

  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  try {
    const response = await http.post(`/invitations/accept`, JSON.stringify({ token }), config);
  } catch (error) {
    console.error(error);
  }
};