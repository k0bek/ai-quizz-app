"use server";
import { signUpUrl } from "@/constants/api";
import { signUpSchema } from "@/lib/form-schemas";
import { z } from "zod";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  const { email, password } = values;
  const validatedFields = signUpSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  try {
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: validatedFields.data?.email,
        password: validatedFields.data?.password,
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
