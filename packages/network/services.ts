"use service";

import { USER_SESSION_KEY } from "@/src/app/constants";
import { cookies } from "next/headers";

export const findOne = async (id: string) => {
  // cookies().get(USER_SESSION_KEY);
  return { id, name: "John Doe" };
};
