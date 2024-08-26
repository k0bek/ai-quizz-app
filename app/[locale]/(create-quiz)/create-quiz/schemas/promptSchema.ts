import { useTranslations } from "next-intl";
import React from "react";
import { z } from "zod";
export const PromptSchemas = () => {
  const t = useTranslations("CreateQuiz");
  const promptSchema = z.object({
    prompt: z
      .string()
      .min(10, { message: t("emptyPrompt") })
      .max(1200, {
        message: t("promptExceededChars"),
      }),
  });
  return { promptSchema };
};
