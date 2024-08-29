


"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@nextui-org/react";
import { z } from "zod";
import NavigationControls from "../buttons/NavigationControls";
import NextButton from "../buttons/NextButton";
import { useTranslations } from "use-intl";
import { generateQuizUrl } from "@/constants/api";
import { routes } from "@/routes";


const promptSchema = z.object({
  prompt: z.string().min(10, { message: "Prompt jest wymagany i musi mieć co najmniej 10 znaków." }),
});

type FormValue = z.infer<typeof promptSchema>;

const PromptForm: React.FC = () => {
  const t = useTranslations("CreateQuiz");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: zodResolver(promptSchema),
  });
  
  const router = useRouter();

  const onSubmit = async (data: FormValue) => {
    console.log("Dane wysłane:", data);

    const quizData = {
      content: data.prompt,
      numberOfQuestions: 2, // Domyślna liczba pytań
      questionType: 0, // Domyślny typ pytania
    };

    try {
      const response = await fetch(generateQuizUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json-patch+json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGNkM2JlYi1hZDQ5LTQzZWUtOGIzOS1lYmUzYjAxMzA4ZDgiLCJqdGkiOiJiYzQ2MDRmMi1kZmNlLTRkMjUtODlhOS0wYzUwODczNDAyMWYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmF6d2FfdGVzdG93YSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImVtYWlsM0BlbWFpbHNlcnZpY2UuY29tIiwiZXhwIjoxNzI0OTI1NDQ1LCJpc3MiOiJodHRwczovL21sYWIyMDI0LWJhY2tlbmQueWVsbG93b2NlYW4tMzEzMzA1MDcud2VzdGV1cm9wZS5henVyZWNvbnRhaW5lcmFwcHMuaW8vIiwiYXVkIjoiaHR0cHM6Ly9tbGFiMjAyNC1iYWNrZW5kLnllbGxvd29jZWFuLTMxMzMwNTA3Lndlc3RldXJvcGUuYXp1cmVjb250YWluZXJhcHBzLmlvLyJ9.ACAA2VYeA-CiOwhUwjeXViZc2bkUBnxCssWjr3_tXcY `, 
          "Accept": "application/json",
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
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 gap-2 bg-content2">
      <Textarea
        isRequired
        variant="faded"
        label={t("promptLabel")}
        {...register("prompt")}
        labelPlacement="outside"
        placeholder={t("promptForm")}
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

