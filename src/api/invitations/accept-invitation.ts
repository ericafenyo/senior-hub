"use server";

import { getAuthentication } from "@/core/auth";
import { http } from "@/api/client";


export const acceptInvitation = async (state: any, formData: FormData) => {
  const { token } = Object.fromEntries(formData);

  const authentication = await getAuthentication();
  const config = {
    headers: {
      Authorization: `Bearer ${authentication.token}`
    }
  };

  try {
    const response = await http.post(`/invitations/accept`, { token }, config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};