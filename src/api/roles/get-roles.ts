"use server";

import { http } from "@/api/client";
import { getAuthentication } from "@/core/auth";
import { AxiosResponse } from "axios";
import { Role } from "@/types";

export const getRoles = async (): Promise<Array<Role>> => {
  const authentication = await getAuthentication();

  const config = {
    headers: {
      Authorization: `Bearer ${authentication.token}`
    }
  };

  const response: AxiosResponse<Array<Role>> = await http.get("/roles", config);

  return response.data;
};
