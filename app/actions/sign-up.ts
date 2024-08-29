"use server";
import { signUpUrl } from "@/constants/api";
import { signUpSchema } from "@/lib/form-schemas";
import axiosInstance from "@/utils/actions/axiosInstance";
import { z } from "zod";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  const validatedFields = signUpSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: { errorDet: ["Invalid fields."] } };
  }

  try {
    const response = await axiosInstance.post(signUpUrl, values, {
      withCredentials: true,
    });
    if (response.data) {
      return { message: "Sign-up succesful" };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
