"use server";

import { http } from "@/api/client";
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
      Authorization: `Bearer ${authentication.token}`
    }
  };

  const body = { email, role };

  try {
    const response = await http.post(`/teams/${teamId}/invitations`, body, config);
  } catch (error) {
    console.error(error);
  }
};