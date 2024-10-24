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

export function extract(token: string): Claims {
  const claims = token.split(".")[1];
  return JSON.parse(atob(claims));
}
