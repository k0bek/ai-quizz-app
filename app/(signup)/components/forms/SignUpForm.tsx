"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import SubmitButton from "../SubmitButton";
import { Checkbox } from "@nextui-org/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../../schemas/signup-schema";
import { Button } from "@nextui-org/button";
import { z } from "zod";
function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
      rememberMe: false,
    },
  });
  type FormData = z.infer<typeof SignupSchema>;
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
          {...register("email", { required: "Email is required" })}
          id="email"
          type="email"
          label="E-mail"
          name="email"
          disabled={isSubmitting}
        />
        {errors?.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-foreground-100 text-medium">
          Password
        </label>
        <Input
          {...register("password", { required: "Password is required" })}
          type="password"
          id="password"
          label="Password"
          name="password"
          disabled={isSubmitting}
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
          Repeat password
        </label>
        <Input
          {...register("repeatPassword", {
            required: "Please repeat the password",
          })}
          type="password"
          id="repeatPassword"
          label="Repeat password"
          name="repeatPassword"
          disabled={isSubmitting}
        />
        {errors?.repeatPassword && (
          <span className="text-red-600">{errors.repeatPassword.message}</span>
        )}
      </div>

      <Checkbox
        {...register("rememberMe")}
        color="default"
        className="block md:hidden"
        type="checkbox"
      >
        <span className="text-foreground-100">Remember Me</span>
      </Checkbox>

      <Button type="submit" disabled={isSubmitting}>
        Register
      </Button>
    </form>
  );
}

export default SignUpForm;
