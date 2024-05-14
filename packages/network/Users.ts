"use server";

import { http } from "./utils";
import { execute } from "./util/axios-wrapper";
import { cookies } from "next/headers";
import { USER_SESSION_KEY } from "@/constants";
import { User, Session } from "./types";

export const findById = async (id: string): Promise<User> => {
  const result = cookies().get(USER_SESSION_KEY)?.value || "";

  const session: Session = result ? JSON.parse(result) : null;

  const token = session?.token || "";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return execute(() => http.get(`/users/${id}`, config));
};

export const updateUser = async (user: User): Promise<User> => {
  const result = cookies().get(USER_SESSION_KEY)?.value || "";

  const session: Session = result ? JSON.parse(result) : null;

  const token = session?.token || "";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return execute(() => http.put(`/users/${user.id}`, user, config));
};

