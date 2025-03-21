"use server";

import { http } from "@/api/utils";
import { getAccessToken } from "@/core/auth";
import { Permission } from "@/types/permission";

export const fetchPermissions = async (roleId: string): Promise<Permission[]> => {

  const config = {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  };

  const response = await http.get(`/roles/${roleId}`, config);
  return response.json();
};
