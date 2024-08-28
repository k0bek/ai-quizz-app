"use client";
import React from "react";
import { Chip } from "@nextui-org/chip";
import QuizItem from "./Quiz/QuizItem";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/react";
import SaveQuiz from "../../create-quiz/components/buttons/SaveQuiz";
import NavigationControls from "../../create-quiz/components/buttons/NavigationControls";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import { useTranslations } from "next-intl";
function Preview() {
  const mockQuestions = [
    {
      questionId: 1,
      number: 1,
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      questionId: 2,
      number: 2,
      question: "Who won the 2020 Nobel Prize in Literature?",
      answers: [
        "Jane Austen",
        "William Shakespeare",
        "Ernest Hemingway",
        "George Orwell",
      ],
    },
    {
      questionId: 3,
      number: 3,
      question: "Which famous American inventor developed the light bulb?",
      answers: [
        "Alexander Graham Bell",
        "Enrico Fermi",
        "Nikola Tesla",
        "Charles Babbage",
      ],
    },
    {
      questionId: 4,
      number: 4,
      question: "Who is the current Prime Minister of Canada?",
      answers: ["Joe Biden", "Stephen McCain", "John Cena", "Michael Douglas"],
    },
  ];
  const router = useRouter();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(routes.createQuiz[3].route);
  };
  const t = useTranslations("QuizPreview");
  return (
    <>
      <form onSubmit={onSubmit} className=" flex-col flex  rounded-lg">
        <h1 className="text-4xl font-semibold pt-5 pb-5">
          {t("quizPreviewHeading")}
        </h1>
        <h1
          className="text-lg
      font-normal"
        >
          {t("quizPreviewMessage")}
        </h1>
        <aside className="bg-content2 p-6 mt-5 gap-6 flex flex-col">
          <div className="flex justify-between items-center ">
            <Chip color="primary" size="md" radius="sm">
              {t("numberOfQuestions")}
            </Chip>
            <div className="flex items-center gap-2">
              <label htmlFor="answers">{t("answers")}</label>
              <Switch size="lg" color="default" />
            </div>
          </div>
          <Button
            className="self-end pr-6 pl-6"
            variant="flat"
            color="primary"
            size="sm"
            radius="md"
          >
            {t("addNewQuestionBtn")}
          </Button>
          {mockQuestions.map((question, index) => (
            <QuizItem key={question.questionId} {...question} />
          ))}
        </aside>
        <NavigationControls>
          <SaveQuiz />
        </NavigationControls>
      </form>
    </>
  );
}

export default Preview;
