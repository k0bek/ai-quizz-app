"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { z } from "zod";
import { useTranslations } from "next-intl";
import authSchemas from "../schemas/authSchemas";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "@/app/hooks/useToast";
import { signUp } from "@/app/actions/sign-up";
import { useMutation } from "@tanstack/react-query";

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
  const router = useRouter();
  const { showSuccess, showError } = useToast();

  const { mutate, isPending, error } = useMutation({
    mutationFn: signUp,
    onError: (error) => {
      toast.error(error.message);
      console.log(error.message);
    },
    onSuccess: () => {
      router.push(routes.signIn);
      toast.success("Successfully signed in!");
    },
  });
  const onSubmit = async (data: FormData) => {
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-6">
      <ToastContainer
        position="top-center"
        transition={Bounce}
        autoClose={5000}
        theme="light"
      />
      <div className="flex flex-col gap-2">
        <label className={"text-medium"} htmlFor="email">
          E-mail
        </label>
        <Input
          {...register("email", { required: t("emailRequired") })}
          id="email"
          type="email"
          name="email"
          disabled={isPending}
          placeholder="E-mail"
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className={`${
            errors?.password ? "text-red-500" : "text-foreground-100"
          } text-medium `}
        >
          {t("password")}
        </label>
        <Input
          {...register("password", { required: true })}
          type="password"
          id="password"
          name="password"
          disabled={isPending}
          placeholder={t("password")}
          autoComplete="off"
          color={error?.message ? "danger" : "default"}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="repeatPassword"
          className={`${
            errors.email ? "text-red-500" : "text-foreground-100"
          } text-medium `}
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
          disabled={isPending}
          placeholder={t("repeatPassword")}
          autoComplete="off"
          color={error?.message ? "danger" : "default"}
        />
      </div>
      {error?.message && (
        <div className="bg-red-500 text-white rounded-xl">{error.message}</div>
      )}

      <Button
        variant={isPending ? "bordered" : "solid"}
        color="primary"
        size="lg"
        radius="sm"
        type="submit"
        disabled={isPending}
        className="mt-5"
      >
        {isSubmitting ? t("pending") : t("register")}
      </Button>
    </form>
  );
}

export default SignUpForm;
