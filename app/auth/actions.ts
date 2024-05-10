"use server";

import { cookies } from "next/headers";

import { USER_SESSION_KEY } from "../constants";

export const getSession = async () => {
  const session = cookies().get(USER_SESSION_KEY);
  console.log(session);
};
