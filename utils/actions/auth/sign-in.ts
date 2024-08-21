"use server";

import { signInSchema } from "@/lib/form-schemas";
import { z } from "zod";
import axios from "axios";
import { cookies } from "next/headers";

export const signInUser = async (values: z.infer<typeof signInSchema>) => {
  const API_BASE_URL =
    "https://mlab2024-backend.yellowocean-31330507.westeurope.azurecontainerapps.io";
  const signInUrl = `${API_BASE_URL}/api/auth/signin`;

  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  try {
    const response = await axios.post(signInUrl, values, {
      withCredentials: true,
    });

    cookies().set("accessToken", response.data.accessToken);
    cookies().set("refreshToken", response.data.refreshToken);
  } catch (error) {
    console.log(error);
    throw new Error(`This is error is in the Server Action`);
  }
};
