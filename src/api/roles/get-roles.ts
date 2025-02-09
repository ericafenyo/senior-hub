"use server";

import { http } from "@/api/utils";
import { getAccessToken } from "@/core/auth";
import { Role } from "@/types";

export const getRoles = async (): Promise<Array<Role>> => {

  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  const response = await http.get("/roles", config);

  return response.json();
};
