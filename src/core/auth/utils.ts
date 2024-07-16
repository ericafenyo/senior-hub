import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export type Role = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type Claims = {
  email: string;
  sub: string;
  role: Role;
  iss: string;
  iat: number;
  exp: number;
};

export const extract = (token: string): Claims => {
  const claims = token.split(".")[1];
  return JSON.parse(atob(claims));
};

export const isExpired = (token: string) => {
  const claims = extract(token);

  const currentTime = dayjs().utc();

  const expirationTime = dayjs.utc(claims.exp * 1000);

  return currentTime.isAfter(expirationTime);
};
