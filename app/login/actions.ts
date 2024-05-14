"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { Accounts } from "@senior-hub/network";
import { USER_SESSION_KEY } from "../constants";
import { Claims, extract } from "../util/jwts";
import { Session } from "../types";

export const authenticate = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const request = {
    email: email as string,
    password: password as string,
  };

  const tokens = await Accounts.authenticate(request);

  const claims = extract(tokens.accessToken);

  const session: Session = sessionFromClaims(claims, tokens.accessToken);

  cookies().set(USER_SESSION_KEY, JSON.stringify(session), { httpOnly: true });

  redirect(`/${session.role}`);
};

function sessionFromClaims(claims: Claims, token: string): Session {
  const id = claims.sub.split("|")[1];

  return {
    id: id,
    role: claims.role.slug,
    token: token,
    expiresAt: new Date(claims.exp * 1000),
  };
}
