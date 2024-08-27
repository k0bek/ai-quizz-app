"use server";
import { signUpUrl } from "@/constants/api";
import { signUpSchema } from "@/lib/form-schemas";
import { error } from "console";
import { z } from "zod";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  const validatedFields = signUpSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: { errorDet: ["Invalid fields."] } };
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

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.errors?.DuplicateEmail);
    }

    if (result && result.message) {
      return { message: result.message };
    }

    return { message: "Sign-up succesful" };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
