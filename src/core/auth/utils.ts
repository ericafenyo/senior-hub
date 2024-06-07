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

export type Payload = {
  id: string;
  role: Role;
  iat: number;
  exp: number;
};

export const extract = (token: string): Claims => {
  const claims = token.split(".")[1];
  return JSON.parse(atob(claims));
};

export const isExpired = (token: string) => {
  const claims = extract(token);
  return new Date(claims.exp * 1000) < new Date();
};
