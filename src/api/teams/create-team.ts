'use server';

import {getAuthentication, getUserId} from "@/core/auth";
import {http} from "../client"

type Request = {
  name: string;
  description: string;
};

export const createTeam = async (formData: FormData): Promise<void> => {
  const authentication = await getAuthentication()
  const id = await getUserId();

  const request: Request = {
    name: formData.get('name') as string,
    description: formData.get('description') as string,
  }

  const config = {
    headers: {
      Authorization: `Bearer ${authentication.token}`,
    },
  };

  try {
    await http.post(`users/${id}/teams`, request, config);
  } catch (e) {
    console.error(e);
  }
}
