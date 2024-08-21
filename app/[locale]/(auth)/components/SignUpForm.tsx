"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { z } from "zod";
import { useTranslations } from "next-intl";
import authSchemas from "../schemas/authSchemas";
import { signUp } from "@/api/auth/sign-up";
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
  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    console.log(email, password);
    const signUpResult = await signUp(email, password);
    console.log(signUpResult);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-2">
        <label className="text-foreground-100 text-medium" htmlFor="email">
          E-mail
        </label>
        <Input
          {...register("email", { required: t("emailRequired") })}
          id="email"
          type="email"
          name="email"
          disabled={isSubmitting}
          placeholder="E-mail"
          autoComplete="off"
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
          {...register("password", { required: true })}
          type="password"
          id="password"
          name="password"
          disabled={isSubmitting}
          placeholder={t("password")}
          autoComplete="off"
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
          autoComplete="off"
        />
        {errors?.repeatPassword && (
          <span className="text-red-600">{errors.repeatPassword.message}</span>
        )}
      </div>

      <Button
        variant="solid"
        color="primary"
        size="lg"
        radius="sm"
        type="submit"
        disabled={isSubmitting}
        className="mt-5"
      >
        {t("register")}
      </Button>
    </form>
  );
}

export default SignUpForm;
