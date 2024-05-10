export enum AuthStatus {
  UNAUTHENTICATED = "unauthenticated",
  AUTHENTICATED = "authenticated",
}

export const RoleTypes = {
  caretaker: "caretaker",
  senior: "senior",
};

export type Session = {
  subject: string;
  role: string;
  status: AuthStatus;
  authToken: string;
  expiresAt: Date;
};
