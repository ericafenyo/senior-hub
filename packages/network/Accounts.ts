import { http } from "./utils";
import { Result } from "./Result";
import { Tokens } from "./types";

export type AuthenticateRequest = {
  email: string;
  password: string;
};

export namespace Accounts {
  export const authenticate = async (request: AuthenticateRequest): Promise<Result<Tokens>> => {
    return Result.catch(() => http.post("/authenticate", request));
  };
}
