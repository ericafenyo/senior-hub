"use server";

import { getAccessToken } from "@/core/auth";
import { http } from "@/api/utils";

type Request = {
  name: string;
  description: string;
};

export const createTeam = async (formData: FormData): Promise<void> => {
  const request: Request = {
    name: formData.get("name") as string,
    description: formData.get("description") as string
  };

  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  try {
    await http.post(`/teams`, JSON.stringify(request), config);
  } catch (e) {
    console.error(e);
  }
};
