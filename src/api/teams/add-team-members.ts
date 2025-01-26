"use server";

import { http } from "@/api/utils";
import { getAuthentication } from "@/core/auth";

type Request = {
  teamId: string;
  email: string;
  role: string;
}

export const addTeamMember = async (formData: FormData) => {
  const { email, role, teamId } = Object.fromEntries(formData.entries()) as Request;

  const authentication = await getAuthentication();

  const config = {
    headers: {
      Authorization: `Bearer ${authentication.accessToken}`
    }
  };


  try {
    const response = await http.post(`/teams/${teamId}/invitations`, JSON.stringify({ email, role }), config);
  } catch (error) {
    console.error(error);
  }
};