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
import { useModalStore } from "@/store/modalStore";
import AddQuestionModal from "@/app/[locale]/modals/AddQuestionModal";
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
  const { closeModal, openModal, setModalData } = useModalStore();
  const openDeleteModalHandler = () => {
    openModal("addQuestion");
    setModalData({
      title: "Some title",
      description: "Some title",
      status: "",
      questions: 0,
    });
  };
  const deleteQuestionHandler = () => {
    openModal("deleteQuestion");
  };
  return (
    <>
      <form onSubmit={onSubmit} className=" flex-col flex  rounded-lg">
        <aside className="bg-content2 p-6 mt-5 gap-6 flex flex-col">
          <div className="flex gap-3  sm:gap-2 md:gap-0 justify-between items-center ">
            <Chip color="primary" size="md" radius="sm">
              {t("numberOfQuestions")}
            </Chip>
            <div className="flex items-center flex-col sm:flex-row gap-2 ">
              <label className="text-sm order-1" htmlFor="answers">
                {t("answers")}
              </label>
              <Switch className="order-0" size="lg" color="default" />
            </div>
          </div>
          <Button
            className="self-end pr-6 pl-6"
            variant="flat"
            color="primary"
            size="sm"
            radius="md"
            onClick={openDeleteModalHandler}
          >
            {t("addNewQuestionBtn")}
          </Button>
          {mockQuestions.map((question) => (
            <div key={question.questionId}>
              <QuizItem {...question} />
            </div>
          ))}
        </aside>
        <NavigationControls>
          <SaveQuiz />
        </NavigationControls>
        <AddQuestionModal />
      </form>
    </>
  );
}

export default Preview;
