import { http } from "./utils";
import { Result } from "./Result";
import { User } from "./types";

export namespace Users {
  export const findById = async (id: String): Promise<Result<User>> => {
    return Result.catch(() => http.get("/users/${id}"));
  };
}
