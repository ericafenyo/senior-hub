import { http } from "./utils";
import { execute } from "./util/axios-wrapper";
import { User } from "./types";

export namespace Users {
  export const findById = async (id: String): Promise<User> => {
    return execute(() => http.get("/users/${id}"));
  };
}
