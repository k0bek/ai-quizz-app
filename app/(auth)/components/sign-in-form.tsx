"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signInSchema } from "../schemas/sign-in";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";

type FormData = z.infer<typeof signInSchema>;

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: FormData) {
    console.log(isSubmitting);
    console.log(data);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  return (
    <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <label htmlFor="email" className="text-medium text-foreground-100">
          E-mail
        </label>
        <Input
          variant="flat"
          {...register("email", { required: true })}
          id="email"
          name="email"
          type="text"
          radius="sm"
          placeholder="Email"
          autoComplete="off"
          className="text-foreground-500 mt-1 text-sm"
          disabled={isSubmitting}
        />
        {errors?.email && (
          <p className="text-red-500 mt-2 text-sm">{errors?.email?.message}</p>
        )}
      </div>

      <div className="relative mt-6">
        <label htmlFor="password" className="text-medium text-foreground-100">
          Password
        </label>
        <Input
          variant="flat"
          {...register("password", { required: true })}
          id="password"
          type="password"
          name="password"
          className="text-foreground-500 mt-1 text-sm"
          placeholder="Password"
          autoComplete="off"
          disabled={isSubmitting}
        />
        {errors?.password && (
          <p className="text-red-500 mt-2 text-sm">
            {errors?.password?.message}
          </p>
        )}
      </div>

      <div className="flex mt-6 items-center ml-2">
        <Checkbox
          color="default"
          radius="none"
          size="sm"
          {...register("rememberMe")}
        >
          <span className="text-primary text-sm">Remember me</span>
        </Checkbox>
      </div>

      <Button
        variant="solid"
        color="primary"
        size="lg"
        radius="sm"
        type="submit"
        className="w-full mt-10 bg-primary text-primary-foreground cursor-pointer text-medium disabled:opacity-50"
        disabled={isSubmitting}
      >
        Login
      </Button>
      <div className="flex justify-between mt-6 gap-2">
        <Button
          variant="ghost"
          size="lg"
          radius="sm"
          className="text-tiny sm:text-medium disabled:opacity-50"
          color="primary"
          disabled={isSubmitting}
        >
          <Link href="sign-up">Create account</Link>
        </Button>
        <Button
          variant="ghost"
          size="lg"
          radius="sm"
          color="primary"
          className="text-tiny sm:text-medium disabled:opacity-50"
          disabled={isSubmitting}
        >
          I forgot password
        </Button>
      </div>
    </form>
  );
}
