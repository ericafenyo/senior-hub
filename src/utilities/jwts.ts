import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export type Claims = {
  email: string;
  sub: string;
  iss: string;
  iat: number;
  exp: number;
};

const extract = (token: string): Claims => {
  const claims = token.split(".")[1];
  return JSON.parse(atob(claims));
};

const isExpired = (token: string) => {
  const claims = extract(token);

  const currentTime = dayjs().utc();

  const expirationTime = dayjs.utc(claims.exp * 1000);

  return currentTime.isAfter(expirationTime);
};

export const jwts = { extract, isExpired };
