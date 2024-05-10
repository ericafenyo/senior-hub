"use server";

import { cookies } from "next/headers";

import { USER_SESSION_KEY } from "../constants";
import { Session } from "../types";

export const retrieveSection = async (): Promise<Session | null> => {
  const value = cookies().get(USER_SESSION_KEY)?.value || "";

  if (!value) {
    return null;
  }

  return JSON.parse(value);
};

export const invalidate = async () => {
  cookies().set(USER_SESSION_KEY, "", { httpOnly: true });
};

export const isAuthenticated = async (): Promise<boolean> => {
  const session = await retrieveSection();
  return session !== null && !isExpired(session);
};

export const isExpired = (session: Session) => {
  return session.expiresAt < new Date();
};
