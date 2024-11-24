"use server";

import {http} from "./utils";
import {execute} from "./util/axios-wrapper";
import {getAuthentication} from "@/core/auth"
import {User} from "./types";

export const findById = async (id: string): Promise<User> => {
  const authentication = await getAuthentication()

  const config = {
    headers: {
      Authorization: `Bearer ${authentication.token}`,
    },
  };
  return execute(() => http.get(`/users/${id}`, config));
};

export const updateUser = async (user: User): Promise<User> => {
  const authentication = await getAuthentication()

  const config = {
    headers: {
      Authorization: `Bearer ${authentication.token}`,
    },
  };
  return execute(() => http.put(`/users/${user.id}`, user, config));
};

