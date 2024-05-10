import { http } from "./utils";
import { Tokens } from "./types";
import { execute } from "./util/axios-wrapper";

export type AuthenticateRequest = {
  email: string;
  password: string;
};

export namespace Accounts {
  export const authenticate = async (request: AuthenticateRequest): Promise<Tokens> => {
    return execute(() => http.post("/authenticate", request));
  };
}
