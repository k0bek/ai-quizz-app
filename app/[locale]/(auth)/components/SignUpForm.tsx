"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { z } from "zod";
import { useTranslations } from "next-intl";
import authSchemas from "../schemas/authSchemas";
function SignUpForm() {
  const { signUpSchema } = authSchemas();
  const t = useTranslations("AuthPages");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });
  type FormData = z.infer<typeof signUpSchema>;
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-2">
        <label className="text-foreground-100 text-medium" htmlFor="email">
          E-mail
        </label>
        <Input
          {...register("email", { required: t("Email is required") })}
          id="email"
          type="email"
          name="email"
          disabled={isSubmitting}
          placeholder="E-mail"
        />
        {errors?.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-foreground-100 text-medium">
          {t("password")}
        </label>
        <Input
          {...register("password", { required: "Password is required" })}
          type="password"
          id="password"
          name="password"
          disabled={isSubmitting}
          placeholder={t("password")}
        />
        {errors?.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="repeatPassword"
          className="text-foreground-100 text-medium"
        >
          {t("repeatPassword")}
        </label>
        <Input
          {...register("repeatPassword", {
            required: t("pleaseRepeatPassword"),
          })}
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          disabled={isSubmitting}
          placeholder={t("repeatPassword")}
        />
        {errors?.repeatPassword && (
          <span className="text-red-600">{errors.repeatPassword.message}</span>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {t("register")}
      </Button>
    </form>
  );
}

export default SignUpForm;
