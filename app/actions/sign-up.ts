"use server";
import { signUpUrl } from "@/constants/api";
import { z } from "zod";
import authSchemas from "../[locale]/(auth)/schemas/authSchemas";

const { signUpSchema } = authSchemas();
export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  const { email, password } = values;
  try {
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return false;
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error during sign-up:", error);
    return false;
  }
};
