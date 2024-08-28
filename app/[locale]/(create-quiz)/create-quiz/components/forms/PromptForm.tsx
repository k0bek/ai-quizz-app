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
import { PromptSchema } from "@/lib/form-schemas";
import { generateQuizUrl } from "@/constants/api";

const PromptForm = () => {
  const t = useTranslations("CreateQuiz");
  const promptSchema = z.object({
    prompt: z.string().min(10, { message: t("promptRequiredField") }),
  });
  type FormValue = z.infer<typeof promptSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ resolver: zodResolver(promptSchema) });
  const router = useRouter();

  
  const onSubmit = async (data: FormValue) => {
    console.log(data);

   
    const quizData = {
      content: data.prompt,
      numberOfQuestions: 5, 
      typeOfQuestions: "multiple-choice", 
    };

    try {
      const response = await fetch(generateQuizUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      if (response.ok) {
        const generatedQuiz = await response.json();
        console.log("Wygenerowany quiz:", generatedQuiz);
        router.push(routes.createQuiz[1].route);
      } else {
        console.error("Błąd przy generowaniu quizu:", response.statusText);
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
  };

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
