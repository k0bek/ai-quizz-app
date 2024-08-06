import z from "zod";
export const SignupSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(100, { message: "Password must be less than 100 characters long" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number",
      })
      .regex(/[@$!%*?&#]/, {
        message: "Password must contain at least one special character",
      }),
    repeatPassword: z.string(),
    rememberMe: z.boolean(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });
try {
  SignupSchema.parse({
    email: "test@email.com",
    password: "password123",
    repeatPassword: "password123",
  });
  console.log("Validation passed");
} catch (errors: any) {
  console.log("Validation failed", errors);
}
