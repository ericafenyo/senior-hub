import { cookies } from "next/headers";

import { isExpired } from "./utils";

const AUTH_SESSION_KEY = "SENIOR_HUB_AUTH_SESSION";

export type Authentication = {
  token: string | null;
  status: "idle" | "connected" | "disconnected";
};

export const getAuthentication = async (): Promise<Authentication> => {
  const value = cookies().get(AUTH_SESSION_KEY)?.value;

  if (!value) {
    return {
      token: null,
      status: "idle",
    };
  }

  const entries = JSON.parse(value);
  return { token: entries.token, status: entries.status };
};

export const setAuthentication = async (token: string) => {
  cookies().set(AUTH_SESSION_KEY, JSON.stringify({ token, status: "connected" }), {
    httpOnly: true,
  });
};

export const isAuthenticated = async (): Promise<boolean> => {
  const authentication = await getAuthentication();

  if (!authentication.token) {
    return false;
  }
  return !isExpired(authentication.token);
};
