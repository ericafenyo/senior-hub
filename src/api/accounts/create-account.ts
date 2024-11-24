"use server";

import { http } from "@/api/client";
import { redirect } from "next/navigation";

type Request = {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
};

export const createAccount = async (formData: FormData) => {
  const data: any = Object.fromEntries(formData.entries());

  const request: Request = {
    firstName: data.firstName,
    lastName: data.lastName,
    birthDate: data.birthDate,
    email: data.email,
    password: data.password,
    address: {
      street: data.street,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country
    }
  };

  await http.post("/users", request);
  redirect("/login");
};
