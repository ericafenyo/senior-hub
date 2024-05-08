"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

export enum AuthStatus {
  AUTHENTICATED = "AUTHENTICATED",
  UNAUTHENTICATED = "UNAUTHENTICATED",
}

export enum UserRole {
  CARETAKER = "CARETAKER",
  SENIOR = "SENIOR",
}

export type Tokens = {
  expiresAt: number | undefined;
  accessToken: string;
  refreshToken: string;
};

export type AuthenticatedUser = {
  id: string;
  role: UserRole | null;
};

interface State {
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
  user: AuthenticatedUser;
  setUser: (user: AuthenticatedUser) => void;
  tokens: Tokens;
  setTokens: (tokens: Tokens) => void;
}

const initialState: State = {
  status: AuthStatus.UNAUTHENTICATED,
  setStatus: () => {},
  user: {
    id: "",
    role: null,
  },
  setUser: () => {},
  tokens: {
    expiresAt: new Date(),
    accessToken: "",
    refreshToken: "",
  },
  setTokens: () => {},
};

export const SessionContext = createContext<State>(initialState);

export const SessionProvider = ({ children }: Props) => {
  const [status, setStatus] = useState(initialState.status);
  const [user, setUser] = useState(initialState.user);
  const [tokens, setTokens] = useState(initialState.tokens);

  return (
    <SessionContext.Provider value={{ status, user, tokens, setStatus, setUser, setTokens }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
