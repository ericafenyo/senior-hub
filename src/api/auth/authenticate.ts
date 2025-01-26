import { Tokens } from "@/types/tokens";
import { http } from "@/api/utils";

export type AuthenticateRequest = {
  email: string;
  password: string;
};

export const authenticate = async (request: AuthenticateRequest): Promise<Tokens> => {
  const response = await http.post("/auth/login", JSON.stringify(request), {
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    return {
      accessToken: "",
      refreshToken: ""
    };
  }

  return response.json();
};