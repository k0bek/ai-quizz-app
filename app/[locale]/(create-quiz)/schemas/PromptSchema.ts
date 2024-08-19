import { z } from "zod";

export const PromptSchema = z.object({
  prompt: z
    .string()
    .min(10, { message: "Prompt must be at least 10 characters long" })
    .max(1200, { message: "Prompt should have a maximum of 1200 characters" }),
});
