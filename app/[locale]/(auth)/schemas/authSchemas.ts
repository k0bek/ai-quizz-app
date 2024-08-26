"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";

export const AuthSchemas = () => {
  const t = useTranslations("AuthSchemas");

  const signInSchema = z.object({
    email: z
      .string()
      .email({ message: t("enterValidEmail") })
      .max(100, { message: t("emailMaxLength") }),

    password: z
      .string()
      .min(8, { message: t("passwordMinLength") })
      .max(100, { message: t("passwordMaxLength") })
      .regex(/[a-z]/, {
        message: t("passwordLowercase"),
      })
      .regex(/[A-Z]/, {
        message: t("passwordUppercase"),
      })
      .regex(/[0-9]/, {
        message: t("passwordNumber"),
      })
      .regex(/[@$!%*?&#]/, {
        message: t("passwordSpecialChar"),
      }),
    // rememberMe: z.boolean(),
  });

  const signUpSchema = z
    .object({
      email: z.string().email({ message: t("enterValidEmail") }),
      password: z
        .string()
        .min(6, { message: t("passwordMinLength") })
        .max(100, { message: t("passwordMaxLength") })
        .regex(/[a-z]/, {
          message: t("passwordLowercase"),
        })
        .regex(/[A-Z]/, {
          message: t("passwordUppercase"),
        })
        .regex(/[0-9]/, {
          message: t("passwordNumber"),
        })
        .regex(/[@$!%*?&#]/, {
          message: t("passwordSpecialChar"),
        }),
      repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: t("passwordsDontMatch"),
      path: ["repeatPassword"],
    });
  const promptSchema = z.object({
    prompt: z
      .string()
      .min(10, { message: "Prompt field cannot be empty" })
      .max(1200, {
        message: "Prompt should have a maximum of 1200 characters",
      }),
  });
  return { signInSchema, signUpSchema, promptSchema };
};

export default AuthSchemas;
