"use server";

import { cookies as getCookies } from "next/headers";
import { z } from "zod";
import { Tokens } from "@/types/tokens";
import { isEmpty } from "lodash";

const AUTH_SESSION_KEY = "__CARE_HUB_AUTH_SESSION__";

/**
 * The authentication object that is cached to keep the user connected.
 */
export type Authentication = {
  /**
   * The accessToken is used for authorized access to protected resources.
   */
  accessToken?: string;

  /**
   * The refreshToken is used to get a new access token when the current one expires.
   */
  refreshToken?: string;

  /**
   * The status of the authentication session.
   * - "idle": No active session, user is not authenticated.
   * - "connected": User is authenticated and actively connected.
   * - "disconnected": User is disconnected, requiring reauthentication.
   */
  status: "idle" | "connected" | "disconnected";

  /**
   * The timestamp when the session was last updated.
   * This helps track the session's freshness and determine when a refresh might be needed.
   */
  updated?: Date;
};

/**
 * The default session when the user is not connected
 */
const EMPTY_AUTH_SESSION: Authentication = {
  status: "idle"
};

export const getAuthentication = async (): Promise<Authentication> => {
  const cookies = await getCookies();
  const jsonString = cookies.get(AUTH_SESSION_KEY)?.value ?? JSON.stringify(EMPTY_AUTH_SESSION);

  const session = JSON.parse(jsonString);

  return {
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
    status: session.status,
    updated: session.updated
  };
};

export const getAccessToken = async (): Promise<string> => {
  return getAuthentication().then(authentication => authentication.accessToken ?? "");
};

export const getRefreshToken = async (): Promise<string> => {
  return getAuthentication().then(authentication => authentication.refreshToken ?? "");
};

export const getTokens = async (): Promise<Tokens> => {
  return getAuthentication().then(authentication => ({
    accessToken: authentication.accessToken ?? "",
    refreshToken: authentication.refreshToken ?? ""
  }));
};

/**
 * Sets the authentication session using the provided tokens.
 *
 * @param {Object} tokens - The tokens to set authentication.
 * @throws an error if the tokens are empty.
 */
export const setAuthentication = async (tokens: Tokens): Promise<void> => {
  try {
    // Validate the 'tokens' object
    const result = z
      .object({
        accessToken: z.string().min(1),
        refreshToken: z.string().min(1)
      })
      .parse(tokens);

    // Retrieve the cookie object
    const cookies = await getCookies();

    // Create a new authentication session object
    const session: Authentication = {
      accessToken: tokens.accessToken,
      refreshToken: result.refreshToken,
      status: "connected",
      updated: new Date()
    };

    // Store the session as an HTTP-only cookie
    cookies.set(AUTH_SESSION_KEY, JSON.stringify(session), { httpOnly: true });
  } catch (error) {
    console.error("Failed to set authentication:", error);
    throw error;
  }
};

/**
 * Checks if the user is authenticated.
 *
 * @returns {Promise<boolean>} true if the user is authenticated, otherwise false.
 */
export const isAuthenticated = async (): Promise<boolean> => {
  const { accessToken, refreshToken, status } = await getAuthentication();
  return (!isEmpty(accessToken)) && (!isEmpty(refreshToken)) && status === "connected";
};