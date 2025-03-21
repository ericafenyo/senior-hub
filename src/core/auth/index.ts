"use server";

import { cookies as getCookies } from "next/headers";
import { z } from "zod";
import { Tokens } from "@/types/tokens";
import { sessions } from "@/services/sessions";
import { jwts } from "@/utilities/jwts";
import Logger from "@/utilities/logger";

Logger.defaultMeta = { tag: "AUTHENTICATION" };


const AUTH_SESSION_KEY = "__CARE_HUB_AUTH_SESSION__";
/**
 * The authentication object that is cached to keep the user connected.
 */
export type Authentication = {
  /**
   * An identifier for the authentication session.
   */
  id?: string;

  /**
   * This is the date the session was last updated.
   */
  updated?: Date;
};

export const getAuthentication = async (): Promise<Authentication> => {

  const cookies = await getCookies();
  const jsonString = cookies.get(AUTH_SESSION_KEY)?.value ?? "{}";

  const value = JSON.parse(jsonString);

  return {
    id: value.id,
    updated: new Date(value.updated)
  };
};

export const getAccessToken = async (): Promise<string> => {
  console.log("Calling get auth");
  const tokens = await getTokens();
  Logger.debug("tokens", tokens);
  return tokens.accessToken;
};

export const getRefreshToken = async (): Promise<string> => {
  return getTokens().then(tokens => tokens.refreshToken);
};

export const getTokens = async (): Promise<Tokens> => {
    Logger.debug("getTokens()");
    const authentication = await getAuthentication();
    if (!authentication.id) {
      Logger.warn("Invalid authentication session id");
      return { accessToken: "", refreshToken: "" };

    }

    const jsonString = await sessions.retrieve(authentication.id) ?? JSON.stringify({});

    const session: any = JSON.parse(jsonString);

    console.log("session", session);

    return {
      accessToken: session.tokens?.accessToken ?? "",
      refreshToken: session.tokens?.refreshToken ?? ""
    };
  }
;

/**
 * Sets the authentication session using the provided tokens.
 *
 * @param {Object} tokens - The tokens to set authentication.
 * @throws an error if the tokens are empty.
 */
export const setAuthentication = async (tokens: Tokens): Promise<void> => {
  try {
    // Validate the 'tokens' object
    z.object({
      accessToken: z.string().min(1),
      refreshToken: z.string().min(1)
    }).parse(tokens);

    // Extract the claims from the access token
    // This will throw an error if the token is invalid
    const claims = jwts.extract(tokens.accessToken);
    const userId = claims.sub.split("|")[1];

    // Cache the tokens and user ID
    await sessions.save({ userId, tokens });

    // After that, we will save some information to the cookie
    const cookies = await getCookies();

    // Create a new authentication session object
    const authentication: Authentication = {
      id: userId,
      updated: new Date()
    };

    // Store the session as an HTTP-only cookie
    cookies.set(AUTH_SESSION_KEY, JSON.stringify(authentication), {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
      }
    );
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
  Logger.debug("isAuthenticated() called");
  // const { id } = await getAuthentication();
  // const { accessToken, refreshToken } = await getTokens();
  // const isAuth = (!isEmpty(id) && !isEmpty(accessToken) && !isEmpty(refreshToken));
  // Logger.debug("returning", isAuth);
  // return isAuth;

  return false;
};

/**
 * Clears the authentication session.
 */
export const clearAuthentication = async (): Promise<void> => {
  const cookies = await getCookies();
  const authentication = await getAuthentication();
  if (authentication.id) {
    await sessions.clear(authentication.id);
    cookies.delete(AUTH_SESSION_KEY);
  }
};