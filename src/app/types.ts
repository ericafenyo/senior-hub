export const RoleTypes = {
  caretaker: "caretaker",
  senior: "senior",
};

export type Session = {
  id: string;
  role: string;
  token: string;
  expiresAt: Date;
};
