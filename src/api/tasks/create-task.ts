"use server";

import { getToken } from "@/core/auth";
import { http } from "@/api/client";
import { z } from "zod";

export const createTask = async (state: any, formData: FormData) => {
  const entries = Object.fromEntries(formData);

  const schema = z.object({
    title: z.string(),
    description: z.string(),
    dueDate: z.string().datetime(),
    teamId: z.string(),
    priority: z.string()
  });

  type Request = Omit<z.infer<typeof schema>, "teamId">;

  try {
    const { title, description, dueDate, teamId, priority } = schema.parse(entries);

    const request: Request = { title, description, dueDate, priority };

    const token = await getToken();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await http.post(`/teams/${teamId}/tasks`, request, config);
    console.log(response.data);
  } catch (error: any) {
    console.log(error);
    return "An error occurred while validating data";
  }
};
