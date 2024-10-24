import { cookies } from "next/headers";
import { isExpired, extract } from "./utils";

const AUTH_SESSION_KEY = "SENIOR_HUB_AUTH_SESSION";

export type Authentication = {
  token: string | null;
  status: "idle" | "connected" | "disconnected";
  isAuthenticated: boolean;
};

export const getAuthentication = async (): Promise<Authentication> => {
  const value = cookies().get(AUTH_SESSION_KEY)?.value;

  if (!value) {
    return {
      token: null,
      status: "idle",
      isAuthenticated: false
    };
  }

  const entries = JSON.parse(value);
  return {
    token: entries.token,
    status: entries.status,
    isAuthenticated: entries.token && !isExpired(entries.token)
  };
};

export const getToken = async (): Promise<string> => {
  const authentication = await getAuthentication();
  return authentication.token || "";
};

export const setAuthentication = async (token: string) => {
  cookies().set(AUTH_SESSION_KEY, JSON.stringify({ token, status: "connected" }), {
    httpOnly: true
  });
};

export const isAuthenticated = async (): Promise<boolean> => {
  const authentication = await getAuthentication();

  if (!authentication.token) {
    return false;
  }
  return !isExpired(authentication.token);
};

export const getUserId = async (): Promise<string> => {
  const authentication = await getAuthentication();
  if (!authentication.token) {
    return "";
  }

  const sub = extract(authentication.token).sub;
  return sub.split("|")[1] || "";
};
