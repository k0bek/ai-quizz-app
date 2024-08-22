"use server";

import { signInSchema } from "@/lib/form-schemas";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { signInUrl } from "@/constants/api";

export const signInUser = async (values: z.infer<typeof signInSchema>) => {
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
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
