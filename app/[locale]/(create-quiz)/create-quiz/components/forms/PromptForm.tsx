"use client";
import { routes } from "@/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import NavigationControls from "../buttons/NavigationControls";
import NextButton from "../buttons/NextButton";
import { useTranslations } from "use-intl";
import { PromptSchemas } from "../../schemas/PromptSchemas";
const PromptForm = () => {
  const { promptSchema } = PromptSchemas();
  type FormValue = z.infer<typeof promptSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ resolver: zodResolver(promptSchema) });
  const router = useRouter();
  const onSubmit = (data: FormValue) => {
    console.log(data);
    router.push(routes.createQuiz[1].route);
    // Call your API here
  };
  const t = useTranslations("CreateQuiz");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        isRequired
        variant="faded"
        label={t("promptLabel")}
        {...register("prompt", { required: true })}
        labelPlacement="outside"
        placeholder={t("promptForm")}
        className="p-6 gap-2 bg-content2"
      />
      {errors.prompt && (
        <div className="text-red-500">{errors.prompt.message}</div>
      )}
      <NavigationControls>
        <NextButton />
      </NavigationControls>
    </form>
  );
};

export default PromptForm;
